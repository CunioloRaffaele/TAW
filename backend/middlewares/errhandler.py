from flask import Blueprint

errHandler_bp = Blueprint('error_handler', __name__)

@errHandler_bp.app_errorhandler(404)
def not_found_error(error):
    return {
        "message": "Resource not found",
    }, 404
    
@errHandler_bp.app_errorhandler(401)
def not_found_error(error):
    return {
        "message": "You are not authorized to access this resource",
    }, 401
    
@errHandler_bp.app_errorhandler(500)
def internal_error(error):
    return {
        "message": "Internal server error",
    }, 500