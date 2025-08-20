from flask import Blueprint
from . import controller
from middlewares.auth import auth_required as authMiddleware
from middlewares.validateJsonRequest import validate_json_request
from middlewares.checkAirlineEnrollment import check_airline_enrollment as checkAirlineEnrolled

airline_bp = Blueprint('airlines', __name__, url_prefix='/api/airlines')

@airline_bp.post('/invite')
@validate_json_request
@authMiddleware
def createAirlineNewAccount():
    return controller.createAirlineNewAccount()

@airline_bp.post('/enroll/<invitationCode>/<airlineName>')
@validate_json_request
def newAirlineAccountEnrollment(invitationCode, airlineName):
    return controller.newAirlineAccountEnrollment(invitationCode, airlineName)

@airline_bp.post('/login')
@validate_json_request
def logAirlineIn():
    return controller.logAirlineIn()

@airline_bp.get('/airlines')
def listAirlines():
    return controller.listAirlines()

@airline_bp.post('/aircrafts')
@validate_json_request
@authMiddleware
@checkAirlineEnrolled
def addAircraft():
    return controller.addAircraft()

@airline_bp.get('/aircrafts/<airlineName>')
def listAircrafts(airlineName):
    return controller.listAircrafts(airlineName)

@airline_bp.delete('/aircrafts/<aircraftId>')
@authMiddleware
@checkAirlineEnrolled
def deleteAircraft(aircraftId):
    return controller.deleteAircraft(aircraftId)

@airline_bp.post('/routes')
@validate_json_request
@authMiddleware
@checkAirlineEnrolled
def enrollInRoute():
    return controller.enrollInRoute()

@airline_bp.delete('/routes/<routeId>')
@authMiddleware
@checkAirlineEnrolled
def unenrollFromRoute(routeId):
    return controller.unenrollFromRoute(routeId)

@airline_bp.get('/routes')
@authMiddleware
@checkAirlineEnrolled
def listRoutes():
    return controller.listRoutes()

@airline_bp.get('/flights')
@authMiddleware
@checkAirlineEnrolled
def listFlights():
    return controller.listFlights()

@airline_bp.get('/flights/pending')
@authMiddleware
@checkAirlineEnrolled
def listActiveFlights():
    return controller.listActiveFlights()

@airline_bp.post('/tickets')
@validate_json_request
@authMiddleware
@checkAirlineEnrolled
def createTicket():
    return controller.createTicket()

@airline_bp.delete('/tickets/<ticketUUID>')
@authMiddleware
@checkAirlineEnrolled
def deleteTicket(ticketUUID):
    return controller.deleteTicket(ticketUUID)

@airline_bp.get('/stats/routes')
@authMiddleware
@checkAirlineEnrolled
def routesStats():
    return controller.routesStats()

