from flask import request, jsonify
from functools import wraps

def validate_json_request(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if request.headers.get('Content-Type') != 'application/json':
            return jsonify({'error': 'Only JSON requests are accepted'}), 406
        return f(*args, **kwargs)
    return decorated_function