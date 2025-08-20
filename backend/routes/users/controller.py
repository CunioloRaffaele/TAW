from flask import request, jsonify, g
from ORM.db import get_db
from ORM.models import Users, blJWTs
from utils.jwt import generate_token
import bcrypt

def createNewAccount():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    if not name or not email or not password:
        return jsonify({'error': 'Missing required fields: name, email, password'}), 400

    with get_db() as db:
        existing_user = db.query(Users).filter(Users.email == email).count()
        if existing_user > 0:
            return jsonify({'error': 'User already exists with this email'}), 400

        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
        new_user = Users(name=name, email=email, password=hashed_password, role=0)
        db.add(new_user)
        db.commit()
        db.refresh(new_user)

        token = generate_token({
            'userId': new_user.id,
            'name': new_user.name,
            'email': new_user.email,
            'role': new_user.role
        })

    return jsonify({'message': 'Account created successfully', 'token': token}), 200

def logUserIn():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'error': 'Missing required fields: email, password'}), 400

    with get_db() as db:
        user = db.query(Users).filter(Users.email == email).first()
        if not user:
            return jsonify({'error': 'User not found with this email'}), 400

        is_password_valid = bcrypt.checkpw(password.encode('utf-8'), user.password.encode('utf-8'))
        if not is_password_valid:
            return jsonify({'error': 'Invalid password'}), 400

        token = generate_token({
            'userId': user.id,
            'name': user.name,
            'email': user.email,
            'role': user.role
        })

    return jsonify({'message': 'Login successful', 'token': token}), 200

def getAccountInfo():
    return jsonify({
        'message': 'User info retrieved successfully',
        'user': getattr(request, 'jwt_token', None)
    }), 200

def deleteAccount():
    if not hasattr(g, 'jwt_token'):
        return jsonify({'error': 'Token is missing'}), 400

    userId = g.jwt_token.get('userId')
    token = getattr(request, 'jwt', None)

    with get_db() as db:
        try:
            # Delete user and blacklist token in a transaction
            user = db.query(Users).filter(Users.id == userId).first()
            if user:
                db.delete(user)
            blacklisted = blJWTs(jwt=token)
            db.add(blacklisted)
            db.commit()
            return jsonify({'message': 'Account deleted and token blacklisted successfully'}), 200
        except Exception as error:
            db.rollback()
            return jsonify({'error': f'Error deleting account or blacklisting token: {str(error)}'}), 500

def sudoDeleteAccount(id):
    if not hasattr(g, 'jwt_token') or g.jwt_token.get('role') != 1:
        return jsonify({'error': 'Only admin (role = 1) can delete accounts'}), 403

    try:
        accountToDelete = int(id)
    except Exception:
        return jsonify({'error': 'Invalid account ID number'}), 500

    with get_db() as db:
        user = db.query(Users).filter(Users.id == accountToDelete).first()
        if not user:
            return jsonify({'error': 'User not found'}), 500

        try:
            db.delete(user)
            db.commit()
            return jsonify({'message': f'Account deleted identified by ID: {accountToDelete} successfully'}), 200
        except Exception as error:
            db.rollback()
            return jsonify({'error': f'Error deleting account: {str(error)}'}), 500

def sudoListAccount():
    if not hasattr(g, 'jwt_token') or g.jwt_token.get('role') != 1:
        return jsonify({'error': 'Only admin (role = 1) can list accounts'}), 403

    with get_db() as db:
        try:
            users = db.query(Users).with_entities(Users.id, Users.name, Users.email, Users.role).all()
            users_list = [
                {'id': u.id, 'name': u.name, 'email': u.email, 'role': u.role}
                for u in users
            ]
            return jsonify({'users': users_list}), 200
        except Exception as error:
            return jsonify({'error': f'Error listing accounts: {str(error)}'}), 500