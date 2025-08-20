from flask import request, jsonify
from functools import wraps
from ORM.db import get_db

from ORM.models import Airlines  # Assicurati che il modello Airline sia definito correttamente

def check_airline_enrollment(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        user = getattr(request, 'jwt_token', None)
        print(f"user: {user}")
        if not user or not user.get('airlineName') or user.get('role') != 2:
            return jsonify({'error': 'Not an airline user'}), 403

        with get_db() as db:
            airline = db.query(Airlines).filter_by(name=user['airlineName'], enrolled=True).first()
            if not airline:
                return jsonify({'error': 'Airline not enrolled or does not exist'}), 403

            return f(*args, **kwargs)
    return decorated_function