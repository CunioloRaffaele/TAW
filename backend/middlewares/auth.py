from flask import request, jsonify
from functools import wraps
import os
from utils.jwt import verify_token, is_token_blacklisted

SECRET_KEY = os.getenv("JWT_SECRET")

#not using the g object, but 'forcing' the write on the request object
# looks like its ageinst the Flask convention, but we choose to do this anyway

def auth_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        auth_header = request.headers.get('Authorization')
        if not auth_header or not auth_header.startswith('Bearer '):
            return jsonify({'error': 'Authorization header missing or invalid'}), 401

        token = auth_header.split(' ')[1]

        is_blacklisted = is_token_blacklisted(token)
        if hasattr(is_blacklisted, '__await__'):
            return jsonify({'error': 'Token is blacklisted and account is deleted'}), 401

        try:
            decoded = verify_token(token)
            # Attacca il payload decodificato all'oggetto request
            setattr(request, 'jwt_token', decoded)
            setattr(request, 'jwt', token)
        except Exception as err:
            return jsonify({'error': 'Invalid or expired token'}), 401

        return f(*args, **kwargs)
    return decorated_function