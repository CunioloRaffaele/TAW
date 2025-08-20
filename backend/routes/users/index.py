from flask import Blueprint
from . import controller
from middlewares.auth import auth_required as authMiddleware
from middlewares.validateJsonRequest import validate_json_request
user_bp = Blueprint('users', __name__, url_prefix='/api/users')

@user_bp.post('/user')
@validate_json_request
def createNewAccount():
    return controller.createNewAccount()

@user_bp.post('/login')
@validate_json_request
def logUserIn():
    return controller.logUserIn()

@user_bp.get('/user')
@authMiddleware
def getAccountInfo():
    return controller.getAccountInfo()

@user_bp.delete('/user')
@authMiddleware
def deleteAccount():
    return controller.deleteAccount()

@user_bp.get('/accounts')
@authMiddleware
def sudoListAccount():
    return controller.sudoListAccounts()

@user_bp.delete('/accounts/<id>')
@authMiddleware
def sudoDeleteAccount(id):
    return controller.sudoDeleteAccount(id)