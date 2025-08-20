from flask import request, jsonify, g
from ORM.db import get_db
from ORM.models import Airlines, Aircrafts, Routes, Uses, Flights, Tickets, Airports, Bookings
from utils.jwt import generate_token
import bcrypt
from sqlalchemy import and_
from datetime import datetime


def createAirlineNewAccount():
    user = getattr(request, 'jwt_token', None)
    if not user or user.get('role') != 1:
        return jsonify({'error': 'Only admin can create new airline accounts'}), 403

    data = request.get_json()
    name = data.get('name')
    if not name:
        return jsonify({'error': 'Missing required fields: name'}), 400

    invitationCode = str(abs(hash(name + str(datetime.utcnow()))))[:12]

    with get_db() as db:
        existing_airline = db.query(Airlines).filter(Airlines.name == name).first()
        if existing_airline:
            return jsonify({'error': 'Airline already exists with this name'}), 400

        new_airline = Airlines(
            name=name,
            password=invitationCode,
            country="Unknown",
            motto="Unknown",
            enrolled=False
        )
        db.add(new_airline)
        db.commit()
        db.refresh(new_airline)

    return jsonify({
        'message': 'Airline account created successfully',
        'name': name,
        'invitationCode': invitationCode
    }), 200

def newAirlineAccountEnrollment(invitationCode, airlineName):
    data = request.get_json()
    password = data.get('password')
    country = data.get('country')
    motto = data.get('motto')
    if not invitationCode or not password or not country or not motto:
        return jsonify({'error': 'Missing required information: invitationCode, password, country, motto'}), 400

    with get_db() as db:
        airline = db.query(Airlines).filter(
            Airlines.name == airlineName,
            Airlines.password == invitationCode,
            Airlines.enrolled == False
        ).first()
        if not airline:
            return jsonify({'error': 'Invalid invitation code or airline name for un-enrolled airline'}), 400

        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
        airline.password = hashed_password
        airline.country = country
        airline.motto = motto
        airline.enrolled = True
        db.commit()
        db.refresh(airline)

    return jsonify({
        'message': 'Airline account enrollment successful',
        'name': airline.name
    }), 200

def logAirlineIn():
    data = request.get_json()
    name = data.get('name')
    password = data.get('password')
    if not name or not password:
        return jsonify({'error': 'Missing required fields: name, password'}), 400

    with get_db() as db:
        airline = db.query(Airlines).filter(
            Airlines.name == name,
            Airlines.enrolled == True
        ).first()
        if not airline:
            return jsonify({'error': 'Airline not found with this name'}), 400

        is_password_valid = bcrypt.checkpw(password.encode('utf-8'), airline.password.encode('utf-8'))
        if not is_password_valid:
            return jsonify({'error': 'Invalid password'}), 403

        token = generate_token({
            'airlineName': airline.name,
            'country': airline.country,
            'motto': airline.motto,
            'role': 2
        })

    return jsonify({
        'message': 'Airline logged in successfully',
        'token': token
    }), 200

def listAirlines():
    with get_db() as db:
        airlines = db.query(Airlines).filter(Airlines.enrolled == True).all()
        airlines_list = [
            {'name': a.name, 'country': a.country, 'motto': a.motto}
            for a in airlines
        ]
    return jsonify({
        'message': 'List of airlines retrieved successfully',
        'airlines': airlines_list
    }), 200

def addAircraft():
    user = getattr(request, 'jwt_token', None)
    data = request.get_json()
    aircraftType = data.get('aircraftType')
    capacity = data.get('capacity')
    try:
        parsedCapacity = int(capacity)
    except Exception:
        return jsonify({'error': 'Missing required fields: aircraftType, capacity'}), 400

    if not aircraftType or not isinstance(parsedCapacity, int):
        return jsonify({'error': 'Missing required fields: aircraftType, capacity'}), 400

    with get_db() as db:
        new_aircraft = Aircrafts(
            model=aircraftType,
            seats_capacity=parsedCapacity,
            owner_name=user['airlineName']
        )
        db.add(new_aircraft)
        db.commit()
        db.refresh(new_aircraft)

    return jsonify({
        'message': 'Aircraft added successfully',
        'aircraftType': aircraftType,
        'capacity': parsedCapacity
    }), 200

def listAircrafts(airlineName):
    if not airlineName:
        return jsonify({'error': 'Missing required param: airlineName'}), 400

    with get_db() as db:
        aircrafts = db.query(Aircrafts).filter(Aircrafts.owner_name == airlineName).all()
        aircrafts_list = [
            {'id': a.id, 'model': a.model, 'seats_capacity': a.seats_capacity}
            for a in aircrafts
        ]
    return jsonify({
        'message': 'List of aircrafts retrieved successfully',
        'aircrafts': aircrafts_list
    }), 200

def deleteAircraft(aircraftId):
    user = getattr(request, 'jwt_token', None)
    try:
        parsedAircraftId = int(aircraftId)
    except Exception:
        return jsonify({'error': 'Missing required param: aircraftId'}), 400

    with get_db() as db:
        aircraft = db.query(Aircrafts).filter(
            Aircrafts.id == parsedAircraftId,
            Aircrafts.owner_name == user['airlineName']
        ).first()
        if not aircraft:
            return jsonify({'error': 'Aircraft not found or does not belong to this airline and cannot be deleted'}), 404

        db.delete(aircraft)
        db.commit()
    return jsonify({
        'message': 'Aircraft deleted successfully',
        'aircraftId': aircraftId
    }), 200

def enrollInRoute():
    user = getattr(request, 'jwt_token', None)
    data = request.get_json()
    departure = data.get('departure')
    destination = data.get('destination')
    try:
        dep = int(departure)
        dest = int(destination)
    except Exception:
        return jsonify({'error': 'Missing required fields or wrong types: departure, destination'}), 400

    with get_db() as db:
        route = db.query(Routes).filter(
            Routes.departure == dep,
            Routes.destination == dest
        ).first()
        if not route:
            return jsonify({'error': 'Route not found... Please create the route before enrolling'}), 404

        existing_enrollment = db.query(Uses).filter(
            Uses.airline_name == user['airlineName'],
            Uses.route_departure == dep,
            Uses.route_destination == dest
        ).first()
        if existing_enrollment:
            return jsonify({'error': 'Airline is already enrolled in this route'}), 409

        new_use = Uses(
            airline_name=user['airlineName'],
            route_departure=dep,
            route_destination=dest
        )
        db.add(new_use)
        db.commit()
        db.refresh(new_use)

    return jsonify({
        'message': 'Successfully enrolled in route',
        'routeId': new_use.id
    }), 200

def unenrollFromRoute(routeId):
    user = getattr(request, 'jwt_token', None)
    try:
        routeIdInt = int(routeId)
    except Exception:
        return jsonify({'error': 'Missing required param: routeId'}), 400

    with get_db() as db:
        result = db.query(Uses).filter(
            Uses.airline_name == user['airlineName'],
            Uses.id == routeIdInt
        ).delete()
        db.commit()
        if result == 0:
            return jsonify({'error': 'No enrollment found for this airline in the specified route. No action taken.'}), 404

    return jsonify({
        'message': 'Successfully unenrolled from route',
        'routeId': routeId
    }), 200

def listRoutes():
    user = getattr(request, 'jwt_token', None)
    with get_db() as db:
        routes = db.query(Uses).filter(Uses.airline_name == user['airlineName']).all()
        routes_list = []
        for route in routes:
            departure_airport = db.query(Airports).filter(Airports.id == route.route_departure).first()
            destination_airport = db.query(Airports).filter(Airports.id == route.route_destination).first()
            routes_list.append({
                'id': route.id,
                'route_departure': route.route_departure,
                'route_destination': route.route_destination,
                'departure_details': {
                    'name': departure_airport.name if departure_airport else None,
                    'city': departure_airport.city if departure_airport else None,
                    'country': departure_airport.country if departure_airport else None
                },
                'destination_details': {
                    'name': destination_airport.name if destination_airport else None,
                    'city': destination_airport.city if destination_airport else None,
                    'country': destination_airport.country if destination_airport else None
                }
            })
    return jsonify({
        'message': 'List of routes retrieved successfully',
        'routes': routes_list
    }), 200

def listFlights():
    user = getattr(request, 'jwt_token', None)
    with get_db() as db:
        flights = db.query(Flights).filter(Flights.airline_name == user['airlineName']).all()
        flights_list = []
        for flight in flights:
            aircraft = db.query(Aircrafts).filter(Aircrafts.id == flight.aircraft_id).first()
            departure_airport = db.query(Airports).filter(Airports.id == flight.route_departure).first()
            liftoff_dateLOCAL = None
            if flight.liftoff_date and departure_airport and departure_airport.time_zone:
                # Conversione fittizia, serve libreria come pytz/dateutil per conversione reale
                liftoff_dateLOCAL = str(flight.liftoff_date)
            flights_list.append({
                'code': str(flight.code),
                'liftoff_date': str(flight.liftoff_date),
                'duration': flight.duration,
                'route_departure': flight.route_departure,
                'route_destination': flight.route_destination,
                'aircraft_id': flight.aircraft_id,
                'aircraft_details': {
                    'model': aircraft.model if aircraft else None,
                    'seats_capacity': aircraft.seats_capacity if aircraft else None
                },
                'lifoffTimeZone': departure_airport.time_zone if departure_airport else None,
                'liftoff_dateLOCAL': liftoff_dateLOCAL
            })
    return jsonify({
        'message': 'List of flights retrieved successfully',
        'flights': flights_list
    }), 200

def listActiveFlights():
    user = getattr(request, 'jwt_token', None)
    now = datetime.utcnow()
    with get_db() as db:
        flights = db.query(Flights).filter(
            Flights.airline_name == user['airlineName'],
            Flights.liftoff_date >= now
        ).all()
        flights_list = []
        for flight in flights:
            aircraft = db.query(Aircrafts).filter(Aircrafts.id == flight.aircraft_id).first()
            departure_airport = db.query(Airports).filter(Airports.id == flight.route_departure).first()
            liftoff_dateLOCAL = None
            if flight.liftoff_date and departure_airport and departure_airport.time_zone:
                liftoff_dateLOCAL = str(flight.liftoff_date)
            flights_list.append({
                'code': str(flight.code),
                'liftoff_date': str(flight.liftoff_date),
                'duration': flight.duration,
                'route_departure': flight.route_departure,
                'route_destination': flight.route_destination,
                'aircraft_id': flight.aircraft_id,
                'aircraft_details': {
                    'model': aircraft.model if aircraft else None,
                    'seats_capacity': aircraft.seats_capacity if aircraft else None
                },
                'lifoffTimeZone': departure_airport.time_zone if departure_airport else None,
                'liftoff_dateLOCAL': liftoff_dateLOCAL
            })
    return jsonify({
        'message': 'List of active flights retrieved successfully',
        'flights': flights_list
    }), 200

def createTicket():
    user = getattr(request, 'jwt_token', None)
    data = request.get_json()
    flightCode = data.get('flightCode')
    ticketsArray = data.get('ticketsArray')
    if not flightCode or not isinstance(ticketsArray, list) or len(ticketsArray) == 0:
        return jsonify({'error': 'Missing required fields: flightCode, ticketsArray'}), 400

    with get_db() as db:
        flight = db.query(Flights).filter(
            Flights.code == flightCode,
            Flights.airline_name == user['airlineName']
        ).first()
        if not flight:
            return jsonify({'error': 'Flight not found for this airline'}), 404

        tickets = []
        for ticket in ticketsArray:
            type_ = ticket.get('type')
            price = ticket.get('price')
            if not type_ or price is None or not isinstance(price, (int, float)):
                return jsonify({'error': 'Missing required fields in ticket: type, price'}), 400
            existing_ticket = db.query(Tickets).filter(
                Tickets.type == type_,
                Tickets.fligt_code == flightCode
            ).first()
            if existing_ticket:
                return jsonify({'error': 'Ticket already exists with this type for the flight'}), 409

        for ticket in ticketsArray:
            type_ = ticket.get('type')
            price = ticket.get('price')
            new_ticket = Tickets(
                type=type_,
                price=float(price),
                fligt_code=flightCode
            )
            db.add(new_ticket)
            db.commit()
            db.refresh(new_ticket)
            tickets.append(str(new_ticket.code))

    return jsonify({
        'message': 'Tickets created successfully',
        'ticketIds': tickets,
        'flightCode': flightCode
    }), 200

def deleteTicket(ticketUUID):
    user = getattr(request, 'jwt_token', None)
    if not ticketUUID:
        return jsonify({'error': 'Missing required param: ticketUUID'}), 400

    with get_db() as db:
        ticket = db.query(Tickets).filter(Tickets.code == ticketUUID).first()
        if not ticket:
            return jsonify({'error': 'Ticket not found and cannot be deleted'}), 404

        flight = db.query(Flights).filter(Flights.code == ticket.fligt_code).first()
        if not flight or flight.airline_name != user['airlineName']:
            return jsonify({'error': 'Ticket does not belong to this airline and cannot be deleted'}), 403

        db.delete(ticket)
        db.commit()
    return jsonify({
        'message': 'Ticket deleted successfully',
        'ticketId': ticketUUID
    }), 200

def routesStats():
    user = getattr(request, 'jwt_token', None)
    with get_db() as db:
        routes = db.query(Uses).filter(Uses.airline_name == user['airlineName']).all()
        if not routes:
            return jsonify({'error': 'No routes found for this airline'}), 404

        stats = {}
        maxBookings = 0
        bookingsCounts = []

        for route in routes:
            bookingsCount = db.query(Bookings).join(Tickets, Bookings.ticket_code == Tickets.code)\
                .join(Flights, Tickets.fligt_code == Flights.code)\
                .filter(
                    Flights.route_departure == route.route_departure,
                    Flights.route_destination == route.route_destination,
                    Flights.airline_name == user['airlineName']
                ).count()
            bookingsCounts.append(bookingsCount)
            if bookingsCount > maxBookings:
                maxBookings = bookingsCount

        for i, route in enumerate(routes):
            flightCount = db.query(Flights).filter(
                Flights.route_departure == route.route_departure,
                Flights.route_destination == route.route_destination,
                Flights.airline_name == user['airlineName']
            ).count()
            ticketCount = db.query(Tickets).join(Flights, Tickets.fligt_code == Flights.code)\
                .filter(
                    Flights.route_departure == route.route_departure,
                    Flights.route_destination == route.route_destination,
                    Flights.airline_name == user['airlineName']
                ).count()
            bookingsCount = bookingsCounts[i]
            trend = 0
            if maxBookings > 0:
                trend = round((bookingsCount / maxBookings) * 100)
            stats[f"{route.route_departure}-{route.route_destination}"] = {
                'flightCount': flightCount,
                'ticketCount': ticketCount,
                'bookingsCount': bookingsCount,
                'trendPercentage': trend
            }

    return jsonify({
        'message': 'Routes stats retrieved successfully',
        'stats': stats
    }), 200
