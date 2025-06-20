const { parse } = require('dotenv');
const prisma = require('../../utils/prisma');
const { generateTicketPDF } = require('./ticket/ticketGenerator');
const { DateTime } = require('luxon');

exports.downloadTicket = async (req, res) => {
    const { id } = req.params;
    if (!id || isNaN(parseInt(id, 10))) {
        return res.status(400).json({ error: 'Missing ID parameter' });
    }
    const userId = req.userToken.userId;
    let ticketData;

    try {
        ticketData = await prisma.bookings.findUnique({
            where: {
                id: parseInt(id, 10)
            },
            include: {
                trips: {
                    include: {
                        users: true,
                    }
                },
                tickets: {
                    include: {
                        flights: {
                            include: {
                                routes: {
                                    include: {
                                        airports_routes_departureToairports: {
                                            select: {
                                                id: true,
                                                name: true,
                                                time_zone: true,
                                            }
                                        },
                                        airports_routes_destinationToairports: {
                                            select: {
                                                id: true,
                                                name: true,
                                                time_zone: true,
                                            }
                                        }
                                    }
                                },
                            }
                        }
                    }
                },
                extras: true,
                seats: true
            }
        });

        const departureAirport = ticketData.tickets.flights.routes.airports_routes_departureToairports;
        const liftoffDateUTC = ticketData.tickets.flights.liftoff_date;
        ticketData.localDepartureDate = DateTime.fromJSDate(liftoffDateUTC).setZone(departureAirport.time_zone).toISO();

        // Validate that the ticket belongs to the user
        const trip = ticketData.trips;
        const user = trip && trip.users;

        if (!user || user.id !== userId) {
            return res.status(404).json({ error: 'Ticket not found or does not belong to this user' });
        }


        if (!ticketData) {
            return res.status(404).json({ error: 'Ticket not found or does not belong to this user' });
        }

    } catch (error) {
        console.error('Error fetching ticket data:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }

    const pdfBuffer = await generateTicketPDF(ticketData);
    res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="ticket.pdf"',
        'Content-Length': pdfBuffer.length
    });
    res.end(pdfBuffer);
};

exports.getTicketDetails = async (req, res) => {
    const { id } = req.params;
    if (!id || isNaN(parseInt(id, 10))) {
        return res.status(400).json({ error: 'Missing ID parameter' });
    }
    const userId = req.userToken.userId;
    let ticketData;

    try {
        ticketData = await prisma.bookings.findUnique({
            where : {
                id : parseInt(id, 10)
            },
            include : {
                trips: {
                    include: {
                        users: true,
                    }
                },
                tickets: {
                    include: {
                        flights: {
                            include: {
                                routes: {
                                    include: {
                                        airports_routes_departureToairports: {
                                            select: {
                                                id: true,
                                                name: true,
                                                time_zone: true,
                                            }
                                        },
                                        airports_routes_destinationToairports: {
                                            select: {
                                                id: true,
                                                name: true,
                                                time_zone: true,
                                            }
                                        }
                                    }
                                },
                            }
                        }
                    }
                },
                extras: true,
                seats: true
            }
        });

        const departureAirport = ticketData.tickets.flights.routes.airports_routes_departureToairports;
        const liftoffDateUTC = ticketData.tickets.flights.liftoff_date;
        ticketData.localDepartureDate = DateTime.fromJSDate(liftoffDateUTC).setZone(departureAirport.time_zone).toISO();

        // Validate that the ticket belongs to the user
        const trip = ticketData.trips;
        const user = trip && trip.users;

        if (!user || user.id !== userId) {
            return res.status(404).json({ error: 'Ticket not found or does not belong to this user' });
        }
        

        if (!ticketData) {
            return res.status(404).json({ error: 'Ticket not found or does not belong to this user' });
        }
    } catch (error) {
        console.error('Error fetching ticket data:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }

    res.status(200).json(ticketData);
};