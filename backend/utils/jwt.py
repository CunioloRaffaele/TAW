import os
import jwt
from datetime import datetime, timedelta
from ORM.db import get_db
from ORM.models import blJWTs

SECRET_KEY = os.getenv("JWT_SECRET")
JWT_EXPIRATION = os.getenv("JWT_EXPIRATION", "1h")

if not SECRET_KEY or not JWT_EXPIRATION:
    raise RuntimeError("JWT_SECRET or JWT_EXPIRATION is not defined in the environment variables")

def parse_expiration(exp_str):
    if exp_str.endswith('h'):
        hours = int(exp_str[:-1])
        return timedelta(hours=hours)
    raise ValueError("Unsupported expiration format")

def generate_token(payload, expires_in=JWT_EXPIRATION):
    exp_delta = parse_expiration(expires_in)
    payload = payload.copy()
    payload['exp'] = datetime.utcnow() + exp_delta
    return jwt.encode(payload, SECRET_KEY, algorithm="HS256")

def verify_token(token):
    try:
        return jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
    except jwt.ExpiredSignatureError:
        raise Exception("Token expired")
    except jwt.InvalidTokenError:
        raise Exception("Invalid token")

def is_token_blacklisted(token):
    with get_db() as db:
        result = db.query(blJWTs).filter(blJWTs.jwt == token).first()
        return bool(result)
