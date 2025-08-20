from flask import Blueprint
from . import controller
from middlewares.auth import auth_required as authMiddleware
from middlewares.validateJsonRequest import validate_json_request
from middlewares.checkAirlineEnrollment import check_airline_enrollment as checkAirlineEnrolled

navigation_bp = Blueprint('navigate', __name__, url_prefix='/api/navigate')

@navigation_bp.post('/routes')
@validate_json_request
@authMiddleware
@checkAirlineEnrolled
def createRoute():
    return controller.createRoute()

@navigation_bp.get('/routes')
def listRoutes():
    return controller.listRoutes()

@navigation_bp.get('/routes/path')
def getRouteBetweenAirports():
    return controller.getRouteBetweenAirports()

@navigation_bp.get('/routes/<airlineName>')
def getRouteByAirline(airlineName):
    return controller.getRouteByAirline(airlineName)

@navigation_bp.get('/airports')
def getAirports():
    return controller.getAirports()

@navigation_bp.get('/airports/<airportId>')
def getAirportDetails(airportId):
    return controller.getAirportDetails(airportId)

@navigation_bp.get('/airports/<departure>/routes')
def getAirportsDesinations(departure):
    return controller.getAirportsDesinations(departure)

@navigation_bp.get('/airports/<destination>/incoming-routes')
def getAirportsDepartures(destination):
    return controller.getAirportsDepartures(destination)

@navigation_bp.post('/flights')
@validate_json_request
@authMiddleware
@checkAirlineEnrolled
def newFlight():
    return controller.newFlight()

@navigation_bp.delete('/flights/<flightUUID>')
@authMiddleware
@checkAirlineEnrolled
def deleteFlight(flightUUID):
    return controller.deleteFlight(flightUUID)

@navigation_bp.post('/flights/search')
@validate_json_request
def listFlights():
    return controller.listFlights()

@navigation_bp.get('/flights/<flightUUID>')
def getFlightDetails(flightUUID):
    return controller.getFlightDetails(flightUUID)