from flask import request, jsonify, g
from ORM.db import get_db
from ORM.models import Routes, Airports, Uses, Flights, Aircrafts
from sqlalchemy import and_, or_
from datetime import datetime, timedelta
from .alg import findRoute

def createRoute():
    data = request.get_json()
    origin = data.get('origin')
    destination = data.get('destination')
    if not origin or not destination:
        return jsonify({'error': 'Missing required fields: origin, destination'}), 400

    with get_db() as db:
        originAirport = db.query(Airports).filter(Airports.id == int(origin)).first()
        destinationAirport = db.query(Airports).filter(Airports.id == int(destination)).first()
        if not originAirport or not destinationAirport:
            return jsonify({'error': 'Origin or destination airport not found'}), 404

        existingRoute = db.query(Routes).filter(
            Routes.departure == int(origin),
            Routes.destination == int(destination)
        ).first()
        if existingRoute:
            return jsonify({'error': 'Route already exists between these airports'}), 400

        newRoute = Routes(departure=int(origin), destination=int(destination))
        db.add(newRoute)
        db.commit()
        db.refresh(newRoute)
        return jsonify({
            'message': 'Route created successfully',
            'route': {
                'departure': newRoute.departure,
                'destination': newRoute.destination
            }
        }), 201

def listRoutes():
    with get_db() as db:
        routes = db.query(Routes).all()
        routes_list = []
        for route in routes:
            dep_airport = db.query(Airports).filter(Airports.id == route.departure).first()
            dest_airport = db.query(Airports).filter(Airports.id == route.destination).first()
            routes_list.append({
                'departure': route.departure,
                'destination': route.destination,
                'departure_airport': {
                    'id': dep_airport.id,
                    'name': dep_airport.name,
                    'city': dep_airport.city,
                    'country': dep_airport.country,
                    'time_zone': dep_airport.time_zone
                } if dep_airport else None,
                'destination_airport': {
                    'id': dest_airport.id,
                    'name': dest_airport.name,
                    'city': dest_airport.city,
                    'country': dest_airport.country,
                    'time_zone': dest_airport.time_zone
                } if dest_airport else None
            })
        return jsonify({
            'message': 'List of routes retrieved successfully',
            'routes': routes_list
        }), 200

def getAirportsDesinations(departure):
    if not departure or not str(departure).isdigit():
        return jsonify({'error': 'Missing required field: departure'}), 400

    with get_db() as db:
        routes = db.query(Routes).filter(Routes.departure == int(departure)).all()
        airports_list = []
        for route in routes:
            airport = db.query(Airports).filter(Airports.id == route.destination).first()
            airports_list.append({
                'destination': route.destination,
                'destinationAirport': {
                    'name': airport.name,
                    'city': airport.city,
                    'country': airport.country,
                    'time_zone': airport.time_zone
                } if airport else None
            })
        return jsonify({
            'message': 'List of destinations retrieved successfully',
            'airports': airports_list
        }), 200

def getAirportsDepartures(destination):
    if not destination or not str(destination).isdigit():
        return jsonify({'error': 'Missing required field: destination'}), 400

    with get_db() as db:
        routes = db.query(Routes).filter(Routes.destination == int(destination)).all()
        airports_list = []
        for route in routes:
            airport = db.query(Airports).filter(Airports.id == route.departure).first()
            airports_list.append({
                'departure': route.departure,
                'departureAirport': {
                    'name': airport.name,
                    'city': airport.city,
                    'country': airport.country,
                    'time_zone': airport.time_zone
                } if airport else None
            })
        return jsonify({
            'message': 'List of departures retrieved successfully',
            'id': destination,
            'airports': airports_list
        }), 200

def getAirports():
    query = request.args.get('query')
    with get_db() as db:
        airports = []
        if query:
            airports = db.query(Airports).filter(
                (Airports.name.ilike(f"{query}%")) |
                (Airports.city.ilike(f"{query}%")) |
                (Airports.country.ilike(f"{query}%"))
            ).all()
        else:
            airports = db.query(Airports).all()
        airports_list = [
            {
                'id': a.id,
                'name': a.name,
                'city': a.city,
                'country': a.country,
                'time_zone': a.time_zone,
                'lan': a.lan,
                'lat': a.lat
            } for a in airports
        ]
        return jsonify({
            'message': 'List of airports retrieved successfully',
            'airports': airports_list
        }), 200

def getAirportDetails(airportId):
    if not airportId or not str(airportId).isdigit():
        return jsonify({'error': 'Missing required field: airportId'}), 400

    with get_db() as db:
        airport = db.query(Airports).filter(Airports.id == int(airportId)).first()
        if not airport:
            return jsonify({'error': 'Airport not found'}), 404

        return jsonify({
            'message': 'Airport details retrieved successfully',
            'airport': {
                'id': airport.id,
                'name': airport.name,
                'city': airport.city,
                'country': airport.country,
                'time_zone': airport.time_zone,
                'lan': airport.lan,
                'lat': airport.lat
            }
        }), 200

def getRouteBetweenAirports():
    from_id = request.args.get('from')
    to_id = request.args.get('to')
    if not from_id or not to_id:
        return jsonify({'error': 'Missing required query params: from, to'}), 400

    path = findRoute(from_id, to_id)
    
    if not path or path == 0:
        return jsonify({'error': 'No route found between these airports'}), 404

    return jsonify({
        'message': 'Route found',
        'stepsCount': len(path),
        'steps': [getattr(step, 'id', step) for step in path],
        'from': int(from_id),
        'to': int(to_id),
        'path': [
            {
                'id': getattr(step, 'id', step),
                'name': getattr(step, 'name', None),
                'city': getattr(step, 'city', None),
                'country': getattr(step, 'country', None),
                'time_zone': getattr(step, 'time_zone', None)
            } for step in path
        ]
    }), 200

def getRouteByAirline(airlineName):
    if not airlineName:
        return jsonify({'error': 'Missing required parameter: airlineName'}), 400

    with get_db() as db:
        routes = db.query(Uses).filter(Uses.airline_name.ilike(f"%{airlineName}%")).all()
        if not routes:
            return jsonify({'error': 'Airline is not enrolled in any routes'}), 404

        routes_list = [
            {
                'route_departure': r.route_departure,
                'route_destination': r.route_destination
            } for r in routes
        ]
        return jsonify({
            'message': 'Routes found for airline',
            'routes': routes_list
        }), 200

def newFlight():
    data = request.get_json()
    liftOffDateLOCAL = data.get('liftOffDateLOCAL')
    duration = data.get('duration')
    routeDeparture = data.get('routeDeparture')
    routeDestination = data.get('routeDestination')
    aircraftId = data.get('aircraftId')
    airlineName = getattr(request, 'jwt_token', {}).get('airlineName')

    print(data)

    # Validazione
    try:
        duration = int(duration)
        routeDeparture = int(routeDeparture)
        routeDestination = int(routeDestination)
        aircraftId = int(aircraftId)
        liftOffDate = datetime.fromisoformat(liftOffDateLOCAL)
    except Exception:
        return jsonify({'error': 'Missing or invalid required fields'}), 400

    with get_db() as db:
        aircraft = db.query(Aircrafts).filter(
            Aircrafts.id == aircraftId,
            Aircrafts.owner_name == airlineName
        ).first()
        if not aircraft:
            return jsonify({'error': 'Aircraft not found or does not belong to the airline'}), 404

        route = db.query(Routes).filter(
            Routes.departure == routeDeparture,
            Routes.destination == routeDestination
        ).first()
        if not route:
            return jsonify({'error': 'Route not found between the specified airports'}), 404

        isEnrolled = db.query(Uses).filter(
            Uses.airline_name == airlineName,
            Uses.route_departure == routeDeparture,
            Uses.route_destination == routeDestination
        ).first()
        if not isEnrolled:
            return jsonify({'error': 'Airline is not enrolled in the specified route'}), 403

        departureAirport = db.query(Airports).filter(Airports.id == routeDeparture).first()
        liftOffDateUTC = liftOffDate  # Conversione reale da time_zone a UTC non implementata

        if liftOffDateUTC <= datetime.utcnow():
            return jsonify({'error': 'Lift-off date must be in the future'}), 400

        # Verifica sovrapposizione voli
        existingFlight = db.query(Flights).filter(
            Flights.aircraft_id == aircraftId,
            or_(
                and_(
                    Flights.liftoff_date <= liftOffDateUTC,
                    Flights.liftoff_date >= liftOffDateUTC - timedelta(minutes=duration)
                ),
                and_(
                    Flights.liftoff_date >= liftOffDateUTC,
                    Flights.liftoff_date <= liftOffDateUTC + timedelta(minutes=duration)
                )
            )
        ).first()
        if existingFlight:
            return jsonify({'error': 'Aircraft is already scheduled for a flight at the specified lift-off date'}), 400

        flight = Flights(
            liftoff_date=liftOffDateUTC,
            duration=duration,
            route_departure=routeDeparture,
            route_destination=routeDestination,
            aircraft_id=aircraftId,
            airline_name=airlineName
        )
        db.add(flight)
        db.commit()
        db.refresh(flight)
        return jsonify({
            'message': 'New flight created successfully',
            'flight': {
                'code': str(flight.code),
                'liftoff_date': str(flight.liftoff_date),
                'duration': flight.duration,
                'route_departure': flight.route_departure,
                'route_destination': flight.route_destination,
                'aircraft_id': flight.aircraft_id,
                'airline_name': flight.airline_name
            }
        }), 201

def deleteFlight(flightUUID):
    airlineName = getattr(request, 'jwt_token', {}).get('airlineName')
    if not flightUUID:
        return jsonify({'error': 'Missing required parameter: flightUUID'}), 400

    with get_db() as db:
        flight = db.query(Flights).filter(
            Flights.code == flightUUID,
            Flights.airline_name == airlineName
        ).first()
        if not flight:
            return jsonify({'error': 'Flight not found or does not belong to the airline'}), 404

        db.delete(flight)
        db.commit()
        return jsonify({'message': 'Flight deleted successfully'}), 200

def listFlights():
    data = request.get_json()
    routes = data.get('routes')
    searchStartDateLOCAL = data.get('searchStartDateLOCAL')
    searchEndDateLOCAL = data.get('searchEndDateLOCAL')
    passengers = data.get('passengers')
    classType = data.get('classType')

    if not routes or not searchStartDateLOCAL or not searchEndDateLOCAL or not passengers or not classType:
        return jsonify({'error': 'Missing required query parameters: routes, searchStartDateLOCAL, searchEndDateLOCAL, passengers, classType'}), 400

    with get_db() as db:
        for route in routes:
            if not route.get('departure') or not route.get('destination'):
                return jsonify({'error': 'Each route must have a departure and destination'}), 400
        if len(routes) == 0:
            return jsonify({'error': 'At least one route must be provided'}), 400

        validRoutes = db.query(Routes).filter(
            or_(*[
                and_(
                    Routes.departure == int(route['departure']),
                    Routes.destination == int(route['destination'])
                ) for route in routes
            ])
        ).all()
        if len(validRoutes) != len(routes):
            return jsonify({'error': 'One or more routes are invalid or do not exist'}), 400

        try:
            startDate = datetime.fromisoformat(searchStartDateLOCAL)
            endDate = datetime.fromisoformat(searchEndDateLOCAL)
        except Exception:
            return jsonify({'error': 'Invalid date format for searchStartDateLOCAL or searchEndDateLOCAL'}), 400
        if startDate > endDate or startDate < datetime.utcnow():
            return jsonify({'error': 'Invalid date range for searchStartDateLOCAL and searchEndDateLOCAL'}), 400

        # Solo ricerca per singola tratta implementata
        if len(routes) == 1:
            flights = db.query(Flights).filter(
                Flights.liftoff_date >= startDate,
                Flights.liftoff_date <= endDate,
                Flights.route_departure == int(routes[0]['departure']),
                Flights.route_destination == int(routes[0]['destination'])
            ).all()
            flights_list = []
            for flight in flights:
                dep_airport = db.query(Airports).filter(Airports.id == flight.route_departure).first()
                dest_airport = db.query(Airports).filter(Airports.id == flight.route_destination).first()
                liftoff_date_LOCAL = str(flight.liftoff_date)  # Conversione reale non implementata

                # Struttura compatibile con il frontend Angular
                flight_obj = {
                    'code': str(flight.code),
                    'liftoff_date': str(flight.liftoff_date),
                    'liftoff_date_LOCAL': liftoff_date_LOCAL,
                    'duration': flight.duration,
                    'route_departure': flight.route_departure,
                    'route_destination': flight.route_destination,
                    'aircraft_id': flight.aircraft_id,
                    'airline_name': flight.airline_name,
                    'routes': {
                        'airports_routes_departureToairports': {
                            'id': dep_airport.id,
                            'name': dep_airport.name,
                            'city': dep_airport.city,
                            'country': dep_airport.country,
                            'time_zone': dep_airport.time_zone,
                            'lan': dep_airport.lan,
                            'lat': dep_airport.lat
                        } if dep_airport else None,
                        'airports_routes_destinationToairports': {
                            'id': dest_airport.id,
                            'name': dest_airport.name,
                            'city': dest_airport.city,
                            'country': dest_airport.country,
                            'time_zone': dest_airport.time_zone,
                            'lan': dest_airport.lan,
                            'lat': dest_airport.lat
                        } if dest_airport else None
                    }
                }
                # Angular si aspetta un array di array (anche per voli diretti)
                flights_list.append([flight_obj])

            return jsonify({
                'message': 'Flights for single leg retrieved successfully',
                'startDateUtc': str(startDate),
                'endDateUtc': str(endDate),
                'flights': flights_list
            }), 200

        # Multi-leg non implementato
        return jsonify({
            'message': 'Flights with multiple legs not implemented',
            'startDateUtc': str(startDate),
            'endDateUtc': str(endDate),
            'flights': []
        }), 200

def getFlightDetails(flightUUID):
    if not flightUUID:
        return jsonify({'error': 'Missing required parameter: flightUUID'}), 400

    with get_db() as db:
        flight = db.query(Flights).filter(Flights.code == flightUUID).first()
        if not flight:
            return jsonify({'error': 'Flight not found'}), 404

        departureAirport = db.query(Airports).filter(Airports.id == flight.route_departure).first()
        liftoff_date_LOCAL = str(flight.liftoff_date)  # Conversione reale non implementata

        return jsonify({
            'message': 'Flight details retrieved successfully',
            'flight': {
                'code': str(flight.code),
                'liftoff_date': str(flight.liftoff_date),
                'liftoff_date_LOCAL': liftoff_date_LOCAL,
                'duration': flight.duration,
                'route_departure': flight.route_departure,
                'route_destination': flight.route_destination,
                'aircraft_id': flight.aircraft_id,
                'airline_name': flight.airline_name
            }
        }), 200