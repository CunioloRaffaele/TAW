from flask import Blueprint
from . import controller
from middlewares.auth import auth_required as authMiddleware
from middlewares.validateJsonRequest import validate_json_request as validateJsonRequest

booking_bp = Blueprint('bookings', __name__, url_prefix='/api/bookings')

@booking_bp.get('/booking/<id>/download')
@authMiddleware
def downloadBooking(id):
    return controller.downloadBooking(id)

@booking_bp.get('/booking/<id>')
@authMiddleware
def getBookingDetails(id):
    return controller.getBookingDetails(id)

@booking_bp.get('/tickets/<flightUUID>')
def listTickets(flightUUID):
    return controller.listTickets(flightUUID)

@booking_bp.get('/seats/<flightUUID>')
def getFlightAvailableSeats(flightUUID):
    return controller.getFlightAvailableSeats(flightUUID)

@booking_bp.get('/extras')
def getFlightExtras():
    return controller.getFlightExtras()

@booking_bp.post('/trips')
@validateJsonRequest
@authMiddleware
def createTrip():
    return controller.createTrip()

@booking_bp.get('/trips')
@authMiddleware
def listTrips():
    return controller.listTrips()

@booking_bp.get('/trips/<tripId>')
@authMiddleware
def getTripDetails(tripId):
    return controller.getTripDetails(tripId)