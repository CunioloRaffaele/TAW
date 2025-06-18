const prisma = require('../../utils/prisma');
const bcrypt = require('bcrypt');
const { generateToken } = require('../../utils/jwt');
const { parse } = require('dotenv');

exports.createAirlineNewAccount = async (req, res) => {
    // This operation is only accessibe to admin
    const user = req.userToken;
    if (user.role !== 1) {
        return res.status(403).json({ 
            error: 'Only admin can create new airline accounts' 
        });
    }
    
    const { name } = req.body;
    // Validate required fields
    if (!name) {
        return res.status(400).json({ 
            error: 'Missing required fields: name' 
        });
    }

    // generate invitation code
    const invitationCode = Math.random().toString(36).substring(2, 15);

    try{
    // Check if airline already exists
    const existingAirline = await prisma.airlines.findUnique({
        where: {
            name: name
        }
    });
    if (existingAirline) {
        return res.status(400).json({ 
            error: 'Airline already exists with this name' 
        });
    }
    
    // First time the password is set to temporary password (on login, user will be asked to change it) 
    await prisma.airlines.create({
        data: {
            name: name,
            password: invitationCode,
            country: "Unknown",
            motto: "Unknown",
            enrolled: false, // Initially not enrolled
        }
    });

    return res.status(200).json({
        message: 'Airline account created successfully',
        name: name, // Return the name of the airline
        invitationCode: invitationCode // Return the invitation code for the airline to use
    });

    } catch (error) {
        console.error('Error creating airline account:', error);
        return res.status(500).json({ 
            error: 'Internal server error while creating airline account' 
        });
    }

}

exports.newAirlineAccountEnrollment = async (req, res) => {
    const invitationCode = req.params.invitationCode
    const airlineName = req.params.airlineName;
    const { password, country, motto } = req.body;
    if (!invitationCode || !password || !country || !motto) {
        return res.status(400).json({ 
            error: 'Missing required information: invitationCode, password, country, motto' 
        });
    }

    try {
        // Check if airline exists with the invitation code
        const airline = await prisma.airlines.findFirst({
            where: {
                name: airlineName,
                password: invitationCode,
                enrolled: false // Ensure the airline is not already enrolled
            }
        });
        if (!airline) {
            return res.status(400).json({ 
                error: 'Invalid invitation code or airline name for un-enrolled airline' 
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

        // Update the airline with the new password, country, and motto
        await prisma.airlines.update({
            where: {
                name: airlineName,
                password: invitationCode
            },
            data: {
                password: hashedPassword,
                country: country,
                motto: motto,
                enrolled: true
            }
        });

        return res.status(200).json({
            message: 'Airline account enrollment successful',
            name: airline.name // Return the name of the airline
        });

    } catch (error) {
        console.error('Error enrolling airline account:', error);
        return res.status(500).json({ 
            error: 'Internal server error while enrolling airline account' 
        });
    }
}

exports.logAirlineIn = async (req, res) => {
    const { name, password } = req.body;

    // Validate required fields
    if (!name || !password) {
        return res.status(400).json({ 
            error: 'Missing required fields: name, password' 
        });
    }

    // Check if airline exists
    const airline = await prisma.airlines.findUnique({
        where: {
            name: name,
            enrolled: true // Ensure the airline is enrolled
        }
    });
    if (!airline) {
        return res.status(400).json({ 
            error: 'Airline not found with this name' 
        });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, airline.password);
    if (!isPasswordValid) {
        return res.status(403).json({ 
            error: 'Invalid password' 
        });
    }

    // create JWT token
    const token = generateToken({
        airlineName: airline.name,
        country: airline.country,
        motto: airline.motto,
        role: 2
    });

    res.status(200).json({
        message: 'Airline logged in successfully',
        token: token
    });
};

exports.listAirlines = async (req, res) => {
    try {
        const airlines = await prisma.airlines.findMany({
            where: {
                enrolled: true // Only list enrolled airlines
            },
            select: {
                name: true,
                country: true,
                motto: true
            }
        });

        res.status(200).json({
            message: 'List of airlines retrieved successfully',
            airlines: airlines
        });
    } catch (error) {
        console.error('Error retrieving airlines:', error);
        res.status(500).json({ 
            error: 'Internal server error while retrieving airlines' 
        });
    }
}

exports.addAircraft = async (req, res) => {
    const user = req.userToken;
    const { aircraftType, capacity } = req.body;

    // Validate required fields
    const parsedCapacity = parseInt(capacity, 10);
    if (!aircraftType || isNaN(parsedCapacity)) {
        return res.status(400).json({ 
            error: 'Missing required fields: aircraftType, capacity' 
        });
    }

    try {
        // Create new aircraft
        await prisma.aircrafts.create({
            data: {
                model: aircraftType,
                seats_capacity: parsedCapacity,
                owner_name: user.airlineName // middleware verifies that user is an airline so it's safe to use user.name
            }
        });

        res.status(200).json({
            message: 'Aircraft added successfully',
            aircraftType: aircraftType,
            capacity: capacity
        });
    } catch (error) {
        console.error('Error adding aircraft:', error);
        res.status(500).json({ 
            error: 'Internal server error while adding aircraft' 
        });
    }
};

exports.listAircrafts = async (req, res) => {
    const airlineName = req.params.airlineName;

    // Validate required fields
    if (!airlineName) {
        return res.status(400).json({ 
            error: 'Missing required param: airlineName' 
        });
    }

    try {
        // List aircrafts for the specified airline
        const aircrafts = await prisma.aircrafts.findMany({
            where: {
                owner_name: airlineName
            },
            select: {
                id: true,
                model: true,
                seats_capacity: true
            }
        });

        res.status(200).json({
            message: 'List of aircrafts retrieved successfully',
            aircrafts: aircrafts
        });
    } catch (error) {
        console.error('Error retrieving aircrafts:', error);
        res.status(500).json({ 
            error: 'Internal server error while retrieving aircrafts' 
        });
    }
};

exports.deleteAircraft = async (req, res) => {
    const user = req.userToken;
    const aircraftId = req.params.aircraftId;

    // Validate required fields
    const parsedAircraftId = parseInt(aircraftId, 10);
    if (isNaN(parsedAircraftId)) {
        return res.status(400).json({ 
            error: 'Missing required param: aircraftId' 
        });
    }

    try {
        // Check if the aircraft belongs to the airline
        const aircraft = await prisma.aircrafts.findUnique({
            where: {
                id: parsedAircraftId,
                owner_name: user.airlineName // middleware verifies that user is an airline so it's safe to use user.name
            }
        });

        if (!aircraft) {
            return res.status(404).json({ 
                error: 'Aircraft not found or does not belong to this airline and cannot be deleted' 
            });
        }

        // Delete the aircraft
        await prisma.aircrafts.delete({
            where: {
                id: parseInt(aircraftId, 10)
            }
        });

        res.status(200).json({
            message: 'Aircraft deleted successfully',
            aircraftId: aircraftId
        });
    } catch (error) {
        console.error('Error deleting aircraft:', error);
        res.status(500).json({ 
            error: 'Internal server error while deleting aircraft' 
        });
    }
}

exports.enrollInRoute = async (req, res) => {
    const user = req.userToken;
    const { departure, destination } = req.body;

    if (!departure || !destination || isNaN(departure) || isNaN(destination)) {
        return res.status(400).json({ error: 'Missing required fields or wrong types: departure, destination' });
    }

    try {
        // Check if the route exists
        const route = await prisma.routes.findUnique({
            where: {
                departure_destination: {
                    departure: parseInt(departure, 10),
                    destination: parseInt(destination, 10)
                }
            }
        });

        if (!route) {
            return res.status(404).json({ 
                error: 'Route not found... Please create the route before enrolling' 
            });
        }

        // Check if the enrollment already exists
        const existingEnrollment = await prisma.uses.findFirst({
            where: {
                airline_name: user.airlineName,
                route_departure: parseInt(departure, 10),
                route_destination: parseInt(destination, 10)
            }
        });

        if (existingEnrollment) {
            return res.status(409).json({
                error: 'Airline is already enrolled in this route'
            });
        }

        // Enroll the airline in the route
        const newRoute = await prisma.uses.create({
            data: {
                airline_name: user.airlineName, // middleware verifies that user is an airline so it's safe to use user.name
                route_departure: parseInt(departure, 10),
                route_destination: parseInt(destination, 10)
            }
        });

        res.status(200).json({
            message: 'Successfully enrolled in route',
            routeId: newRoute.id
        });
    } catch (error) {
        console.error('Error enrolling in route:', error);
        res.status(500).json({ 
            error: 'Internal server error while enrolling in route' 
        });
    }
}

exports.unenrollFromRoute = async (req, res) => {
    const user = req.userToken;
    const routeId = req.params.routeId;

    // Validate required fields
    if (!routeId || isNaN(routeId)) {
        return res.status(400).json({ 
            error: 'Missing required param: routeId' 
        });
    }

    try {
        // Unenroll the airline from the route
        const result = await prisma.uses.deleteMany({
            where: {
                airline_name: user.airlineName,
                id: parseInt(routeId, 10) // Ensure the routeId is an integer
            }
        });

        if (result.count === 0) {
            return res.status(404).json({ 
                error: 'No enrollment found for this airline in the specified route. No action taken.' 
            });
        }

        res.status(200).json({
            message: 'Successfully unenrolled from route',
            routeId: routeId
        });
    } catch (error) {
        console.error('Error unenrolling from route:', error);
        res.status(500).json({ 
            error: 'Internal server error while unenrolling from route' 
        });
    }
}

exports.listRoutes = async (req, res) => {
    const user = req.userToken;

    try {
        // List routes for the airline
        const routes = await prisma.uses.findMany({
            where: {
                airline_name: user.airlineName // middleware verifies that user is an airline so it's safe to use user.name
            },
            select: {
                id: true,
                route_departure: true,
                route_destination: true
            }
        });
        // for each route get the details for departure and destination airports
        for (let route of routes) {
            const departureAirport = await prisma.airports.findUnique({
                where: {
                    id: route.route_departure
                },
                select: {
                    name: true,
                    city: true,
                    country: true
                }
            });
            const destinationAirport = await prisma.airports.findUnique({
                where: {
                    id: route.route_destination
                },
                select: {
                    name: true,
                    city: true,
                    country: true
                }
            });
            route.departure_details = departureAirport; // Add departure airport details to the route object
            route.destination_details = destinationAirport; // Add destination airport details to the route object
        }

        res.status(200).json({
            message: 'List of routes retrieved successfully',
            routes: routes
        });
    } catch (error) {
        console.error('Error retrieving routes:', error);
        res.status(500).json({ 
            error: 'Internal server error while retrieving routes' 
        });
    }
}

