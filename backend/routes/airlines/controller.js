const { PrismaClient } = require('../../prisma/generated/prisma');
const prisma = new PrismaClient()
const bcrypt = require('bcrypt');
const { generateToken } = require('../../utils/jwt');

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
        return res.status(400).json({ 
            error: 'Invalid password' 
        });
    }

    // create JWT token
    const token = generateToken({
        airlineId: airline.id,
        name: airline.name,
        country: airline.country,
        motto: airline.motto,
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