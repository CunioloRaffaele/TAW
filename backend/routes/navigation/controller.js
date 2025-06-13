const { parse } = require('dotenv');
const { PrismaClient } = require('../../prisma/generated/prisma');
const prisma = new PrismaClient()

exports.createRoute = async (req, res) => {
    const { origin, destination } = req.body;

    // Validate required fields
    if (!origin || !destination) {
        return res.status(400).json({ 
            error: 'Missing required fields: origin, destination' 
        });
    }

    // middleware already checks if operator is an airline

    try {
        // check if the origin and destination airports exist
        const originAirport = await prisma.airports.findUnique({
            where: {
                id: parseInt(origin, 10)
            }
        });
        const destinationAirport = await prisma.airports.findUnique({
            where: {
                id: parseInt(destination, 10)
            }
        });
        if (!originAirport || !destinationAirport) {
            return res.status(404).json({ 
                error: 'Origin or destination airport not found' 
            });
        }
        // check if the route already exists
        const existingRoute = await prisma.routes.findFirst({
            where: {
                departure: parseInt(origin, 10),
                destination: parseInt(destination, 10)
            }
        });
        if (existingRoute) {
            return res.status(400).json({
                error: 'Route already exists between these airports'
            });
        }
        // Create new route
        const newRoute = await prisma.routes.create({
            data: {
                departure: parseInt(origin, 10),
                destination: parseInt(destination, 10),
            }
        });

        return res.status(201).json({
            message: 'Route created successfully',
            route: newRoute
        });
    } catch (error) {
        console.error('Error creating route:', error);
        return res.status(500).json({ 
            error: 'Internal server error while creating route' 
        });
    }
}

exports.listRoutes = async (req, res) => {
    try {
        // List all routes
        const routes = await prisma.routes.findMany({
            select: {
                departure: true,
                destination: true,
            }
        });

        for (const route of routes) {
            // get airprort details for each route
            const getOrigin = await prisma.airports.findFirst({
                where: {
                    id: route.departure
                },
                select: {
                    city: true,
                    name: true,
                    time_zone: true,
                    country: true
                }
            });
            const getDestination = await prisma.airports.findFirst({
                where: {
                    id: route.destination
                },
                select: {
                    city: true,
                    name: true,
                    time_zone: true,
                    country: true
                }
            });
            route.departureAirport = getOrigin;
            route.destinationAirport = getDestination;
        }

        

        return res.status(200).json({
            message: 'List of routes retrieved successfully',
            routes: routes
        });
    } catch (error) {
        console.error('Error retrieving routes:', error);
        return res.status(500).json({ 
            error: 'Internal server error while retrieving routes' 
        });
    }
}

exports.getAirportsDesinations = async (req, res) => {
    const departure = req.params.departure;

    // Validate required fields
    if (isNaN(departure) || !departure) {
        return res.status(400).json({ 
            error: 'Missing required field: departure' 
        });
    }

    try {
        // Get all routes for the given departure airport
        const routes = await prisma.routes.findMany({
            where: {
                departure: parseInt(departure, 10)
            },
            select: {
                destination: true
            }
        });

       for (const route of routes) {
            // get airport details for each destination
           const airports = await prisma.airports.findFirst({
                where: {
                    id: route.destination
                },
                select: {
                    name: true,
                    city: true,
                    country: true,
                    time_zone: true
                }
            });
           route.destinationAirport = airports;
        }

        return res.status(200).json({
            message: 'List of destinations retrieved successfully',
            airports: routes
        });
    } catch (error) {
        console.error('Error retrieving destinations:', error);
        return res.status(500).json({ 
            error: 'Internal server error while retrieving destinations' 
        });
    }
}

exports.getAirportsDepartures = async (req, res) => {
    const destination = req.params.destination;

    // Validate required fields
    if (isNaN(destination) || !destination) {
        return res.status(400).json({ 
            error: 'Missing required field: destination' 
        });
    }

    try {
        // Get all routes for the given destination airport
        const routes = await prisma.routes.findMany({
            where: {
                destination: parseInt(destination, 10)
            },
            select: {
                departure: true
            }
        });

        for (const route of routes) {
            // get airport details for each departure
            const airports = await prisma.airports.findFirst({
                where: {
                    id: route.departure
                },
                select: {
                    name: true,
                    city: true,
                    country: true,
                    time_zone: true
                }
            });
            route.departureAirport = airports;
        }

        return res.status(200).json({
            message: 'List of departures retrieved successfully',
            id: destination,
            airports: routes
        });
    } catch (error) {
        console.error('Error retrieving departures:', error);
        return res.status(500).json({ 
            error: 'Internal server error while retrieving departures' 
        });
    }
}

exports.getAirports = async (req, res) => {
    const query = req.params.query;

    let airports = [];
    try {
        if (query) {
            // search airports by name
            airports = await prisma.airports.findMany({
                where: {
                    OR: [
                        {
                            name: {
                                startsWith: query,
                                mode: 'insensitive'
                            }
                        },
                        {
                            city: {
                                startsWith: query,
                                mode: 'insensitive'
                            }
                        }
                    ]
                },
                select: {
                    id: true,
                    name: true,
                    city: true,
                    country: true,
                    time_zone: true
                }
            });
        } else {
            // Get all airports
            airports = await prisma.airports.findMany({
                select: {
                    id: true,
                    name: true,
                    city: true,
                    country: true,
                    time_zone: true
                }
            });
        }

        return res.status(200).json({
            message: 'List of airports retrieved successfully',
            airports: airports
        });
    } catch (error) {
        console.error('Error retrieving airports:', error);
        return res.status(500).json({ 
            error: 'Internal server error while retrieving airports' 
        });
    }
}