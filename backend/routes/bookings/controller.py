from flask import request, jsonify, g, send_file
from ORM.db import get_db
from ORM.models import Bookings, Trips, Tickets, Flights, Seats, Extras, Users
from routes.bookings.ticket.ticketGenerator import generate_ticket_pdf as generateTicketPDF
from datetime import datetime
import asyncio
import io

def downloadBooking(id):
    if not id or not str(id).isdigit():
        return jsonify({'error': 'Missing ID parameter'}), 400
    userId = getattr(request, 'jwt_token', {}).get('userId')
    with get_db() as db:
        booking = db.query(Bookings).filter(Bookings.id == int(id)).first()
        if not booking:
            return jsonify({'error': 'Ticket not found'}), 404

        trip = db.query(Trips).filter(Trips.id == booking.trip_id).first()
        user = db.query(Users).filter(Users.id == trip.user_id).first() if trip else None
        if not user or user.id != userId:
            return jsonify({'error': 'Ticket not found or does not belong to this user'}), 404

        ticket = db.query(Tickets).filter(Tickets.code == booking.ticket_code).first()
        flight = db.query(Flights).filter(Flights.code == ticket.fligt_code).first() if ticket else None
        seat = db.query(Seats).filter(Seats.id == booking.seat_id).first()
        extras = db.query(Extras).filter(Extras.id == booking.extras_id).first() if booking.extras_id else None

        # Ricostruisci la struttura dati per il template
        ticket_data = {
            'trips': {'users': {'name': user.name}},
            'tickets': {
                'code': str(ticket.code),
                'type': ticket.type,
                'flights': {
                    'code': str(flight.code),
                    'liftoff_date': flight.liftoff_date,
                    'routes': {
                        'airports_routes_departureToairports': {
                            'id': flight.route_departure,
                            'name': None,
                            'time_zone': None
                        },
                        'airports_routes_destinationToairports': {
                            'id': flight.route_destination,
                            'name': None,
                            'time_zone': None
                        }
                    },
                    'airline_name': flight.airline_name
                }
            },
            'seats': {'postion': seat.postion if seat else ''},
            'extras': {'description': extras.description if extras else '', 'price': extras.price if extras else ''}
        }
        # Recupera info aeroporti
        from ORM.models import Airports
        dep_airport = db.query(Airports).filter(Airports.id == flight.route_departure).first()
        dest_airport = db.query(Airports).filter(Airports.id == flight.route_destination).first()
        if dep_airport:
            ticket_data['tickets']['flights']['routes']['airports_routes_departureToairports']['name'] = dep_airport.name
            ticket_data['tickets']['flights']['routes']['airports_routes_departureToairports']['time_zone'] = dep_airport.time_zone
        if dest_airport:
            ticket_data['tickets']['flights']['routes']['airports_routes_destinationToairports']['name'] = dest_airport.name
            ticket_data['tickets']['flights']['routes']['airports_routes_destinationToairports']['time_zone'] = dest_airport.time_zone

        # Calcola localDepartureDate (conversione fittizia)
        ticket_data['localDepartureDate'] = str(flight.liftoff_date)

        # Genera PDF
        try:
            loop = asyncio.get_event_loop()
        except RuntimeError:
            loop = asyncio.new_event_loop()
            asyncio.set_event_loop(loop)
        pdf_bytes = loop.run_until_complete(generateTicketPDF(ticket_data))
        return send_file(
            io.BytesIO(pdf_bytes),
            mimetype='application/pdf',
            as_attachment=True,
            download_name='ticket.pdf'
        )

def getBookingDetails(id):
    if not id or not str(id).isdigit():
        return jsonify({'error': 'Missing ID parameter'}), 400
    userId = getattr(request, 'jwt_token', {}).get('userId')
    with get_db() as db:
        booking = db.query(Bookings).filter(Bookings.id == int(id)).first()
        if not booking:
            return jsonify({'error': 'Ticket not found'}), 404

        trip = db.query(Trips).filter(Trips.id == booking.trip_id).first()
        user = db.query(Users).filter(Users.id == trip.user_id).first() if trip else None
        if not user or user.id != userId:
            return jsonify({'error': 'Ticket not found or does not belong to this user'}), 404

        ticket = db.query(Tickets).filter(Tickets.code == booking.ticket_code).first()
        flight = db.query(Flights).filter(Flights.code == ticket.fligt_code).first() if ticket else None
        seat = db.query(Seats).filter(Seats.id == booking.seat_id).first()
        extras = db.query(Extras).filter(Extras.id == booking.extras_id).first() if booking.extras_id else None

        booking_details = {
            'booking': {
                'id': booking.id,
                'trip_id': booking.trip_id,
                'ticket_code': str(booking.ticket_code),
                'seat_id': booking.seat_id,
                'extras_id': booking.extras_id
            },
            'user': {'id': user.id, 'name': user.name} if user else None,
            'ticket': {
                'code': str(ticket.code),
                'type': ticket.type
            } if ticket else None,
            'flight': {
                'code': str(flight.code),
                'liftoff_date': str(flight.liftoff_date)
            } if flight else None,
            'seat': {'id': seat.id, 'postion': seat.postion} if seat else None,
            'extras': {'id': extras.id, 'description': extras.description, 'price': extras.price} if extras else None
        }
        return jsonify(booking_details), 200

def listTickets(flightUUID):
    if not flightUUID:
        return jsonify({'error': 'Missing flight UUID parameter'}), 400
    with get_db() as db:
        tickets = db.query(Tickets).filter(Tickets.fligt_code == flightUUID).all()
        if not tickets:
            return jsonify({'error': 'No tickets found for this flight'}), 404
        tickets_list = [
            {'code': str(t.code), 'type': t.type, 'price': t.price}
            for t in tickets
        ]
        return jsonify(tickets_list), 200

def getFlightAvailableSeats(flightUUID):
    if not flightUUID:
        return jsonify({'error': 'Missing flight UUID parameter'}), 400
    with get_db() as db:
        flight = db.query(Flights).filter(Flights.code == flightUUID).first()
        if not flight:
            return jsonify({'error': 'Flight not found'}), 404
        booked_seats = db.query(Bookings.seat_id).join(Tickets, Bookings.ticket_code == Tickets.code)\
            .filter(Tickets.fligt_code == flightUUID).all()
        booked_seat_ids = [s[0] for s in booked_seats]
        available_seats = db.query(Seats).filter(
            Seats.aircraft_id == flight.aircraft_id,
            ~Seats.id.in_(booked_seat_ids)
        ).all()
        seats_list = [{'id': s.id, 'postion': s.postion} for s in available_seats]
        return jsonify(seats_list), 200

def getFlightExtras():
    with get_db() as db:
        extras = db.query(Extras).all()
        extras_list = [{'id': e.id, 'description': e.description, 'price': e.price} for e in extras]
        return jsonify(extras_list), 200

def createTrip():
    userId = getattr(request, 'jwt_token', {}).get('userId')
    data = request.get_json()
    tickets = data.get('tickets')
    if not tickets or not isinstance(tickets, list) or len(tickets) == 0:
        return jsonify({'error': 'Invalid tickets or seats data'}), 400
    for ticket in tickets:
        if not ticket.get('ticketUUID') or not ticket.get('seatId'):
            return jsonify({'error': 'Each ticket must have a ticketUUID and seatId'}), 400

    with get_db() as db:
        ticketUUIDs = [t['ticketUUID'] for t in tickets]
        validTickets = db.query(Tickets).filter(Tickets.code.in_(ticketUUIDs)).all()
        validTicketCodes = [str(t.code) for t in validTickets]
        allValid = all(uuid in validTicketCodes for uuid in ticketUUIDs)
        if not allValid:
            return jsonify({'error': 'Invalid ticket UUIDs provided'}), 400

        flights = db.query(Flights).filter(Flights.code.in_([t.fligt_code for t in validTickets]), Flights.liftoff_date > datetime.utcnow()).all()
        if len(flights) != len(validTickets):
            return jsonify({'error': 'Some flights you are trying to book have already departed'}), 400

        seats = db.query(Seats).filter(
            Seats.id.in_([t['seatId'] for t in tickets]),
            Seats.aircraft_id.in_([f.aircraft_id for f in flights])
        ).all()
        if len(seats) != len(tickets):
            return jsonify({'error': 'Invalid seat IDs for the selected flights'}), 400

        for ticket in tickets:
            seat_bookings = db.query(Bookings).filter(
                Bookings.seat_id == ticket['seatId'],
                Bookings.ticket_code == ticket['ticketUUID']
            ).all()
            if seat_bookings:
                return jsonify({'error': f"Seat {ticket['seatId']} is already booked for flight {ticket['ticketUUID']}"}), 400

        allExtras = db.query(Extras).all()
        validExtras = [e.id for e in allExtras]
        for ticket in tickets:
            if ticket.get('extras'):
                for extraId in ticket['extras']:
                    if extraId not in validExtras:
                        return jsonify({'error': f"Invalid extra ID {extraId}"}), 400

        trip = Trips(
            creation_date=datetime.utcnow(),
            user_id=userId
        )
        db.add(trip)
        db.commit()
        db.refresh(trip)

        for t in tickets:
            booking = Bookings(
                ticket_code=t['ticketUUID'],
                seat_id=t['seatId'],
                trip_id=trip.id,
                extras_id=t['extras'][0] if t.get('extras') and len(t['extras']) > 0 else None
            )
            db.add(booking)
        db.commit()

        return jsonify({
            'message': 'Trip created successfully',
            'tripId': trip.id,
            'tickets': [
                {
                    'ticketUUID': t['ticketUUID'],
                    'seatId': t['seatId'],
                    'extras': t.get('extras', [])
                } for t in tickets
            ]
        }), 200

def listTrips():
    userId = getattr(request, 'jwt_token', {}).get('userId')
    with get_db() as db:
        trips = db.query(Trips).filter(Trips.user_id == userId).all()
        trips_list = []
        for trip in trips:
            bookings = db.query(Bookings).filter(Bookings.trip_id == trip.id).all()
            isActive = False
            for booking in bookings:
                ticket = db.query(Tickets).filter(Tickets.code == booking.ticket_code).first()
                flight = db.query(Flights).filter(Flights.code == ticket.fligt_code).first() if ticket else None
                if flight and flight.liftoff_date > datetime.utcnow():
                    isActive = True
            trips_list.append({'id': trip.id, 'isActive': isActive})
        if not trips_list:
            return jsonify({'error': 'No trips found for this user'}), 404
        return jsonify(trips_list), 200

def getTripDetails(tripId):
    if not tripId or not str(tripId).isdigit():
        return jsonify({'error': 'Missing or invalid trip ID parameter'}), 400
    userId = getattr(request, 'jwt_token', {}).get('userId')
    with get_db() as db:
        trip = db.query(Trips).filter(Trips.id == int(tripId)).first()
        if not trip or trip.user_id != userId:
            return jsonify({'error': 'Trip not found or does not belong to this user'}), 404
        bookings = db.query(Bookings).filter(Bookings.trip_id == trip.id).all()
        bookings_list = []
        isActive = False
        for booking in bookings:
            ticket = db.query(Tickets).filter(Tickets.code == booking.ticket_code).first()
            flight = db.query(Flights).filter(Flights.code == ticket.fligt_code).first() if ticket else None
            extras = db.query(Extras).filter(Extras.id == booking.extras_id).first() if booking.extras_id else None
            if flight and flight.liftoff_date > datetime.utcnow():
                isActive = True
            bookings_list.append({
                'id': booking.id,
                'seat_id': booking.seat_id,
                'ticket_code': str(booking.ticket_code),
                'tickets': {
                    'flights': {
                        'route_departure': flight.route_departure if flight else None,
                        'route_destination': flight.route_destination if flight else None,
                        'liftoff_date': str(flight.liftoff_date) if flight else None,
                        'airline_name': flight.airline_name if flight else None,
                        'aircraft_id': flight.aircraft_id if flight else None,
                        'code': str(flight.code) if flight else None
                    } if flight else None
                } if ticket else None,
                'extras': {
                    'id': extras.id,
                    'description': extras.description,
                    'price': extras.price
                } if extras else None
            })
        trip_details = {
            'id': trip.id,
            'user_id': trip.user_id,
            'isActive': isActive,
            'bookings': bookings_list
        }
        return jsonify(trip_details), 200
