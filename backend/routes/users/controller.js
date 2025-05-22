const { generateToken } = require('../../utils/jwt');
const bcrypt = require('bcrypt');
const { PrismaClient } = require('../../prisma');
const prisma = new PrismaClient()

exports.createNewAccount = async (req, res) => {
    const { name, email, password } = req.body;

    // Validate required fields
    if (!name || !email || !password) {
        return res.status(400).json({ 
            error: 'Missing required fields: name, surname, email, password' 
        });
    }
    // Check if user already exists
    const existingUser = await prisma.users.count({
        where: {
            email: email
        }
    });
    if (existingUser > 0) {
        return res.status(400).json({ 
            error: 'User already exists with this email' 
        });
    }
    // Create new user account
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds
    await prisma.users.create({
        data: {
            name: name,
            email: email,
            password: hashedPassword,
            role: 0 // Default role
        }
    });
    // Get user ID and role
    const user = await prisma.users.findUnique({
        where: {
            email: email
        }
    });

    // create JWT token
    const token = generateToken({
        userId: user.id,
        name: user.name,
        email: user.email,
        role: user.role
    });

    res.status(200).json({
        message: 'Account created successfully',
        token: token
    });
};

exports.logUserIn = async (req, res) => {
    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password) {
        return res.status(400).json({ 
            error: 'Missing required fields: email, password' 
        });
    }
    // Check if user exists
    const user = await prisma.users.findUnique({
        where: {
            email: email
        }
    });
    if (!user) {
        return res.status(400).json({ 
            error: 'User not found with this email' 
        });
    }
    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ 
            error: 'Invalid password' 
        });
    }
    // create JWT token
    const token = generateToken({
        userId: user.id,
        name: user.name,
        email: user.email,
        role: user.role
    });

    res.status(200).json({
        message: 'Login successful',
        token: token
    });
}

exports.getAccountInfo = (req, res) => {
        res.status(200).json({
        message: 'User info retrieved successfully',
        user: req.userToken
    });
}

exports.deleteAccount = async (req, res) => {
    // Validate required fields
    if (!req.userToken) {
        return res.status(400).json({ 
            error: 'Token is missing' 
        });
    }
    const userId = req.userToken.userId;
    // Delete user account
    try {
        await prisma.users.delete({
            where: {
                id: userId
            }
        });
    }
    catch (error) {
        return res.status(400).json({ 
            error: 'Error deleting account ' + error.message 
        });
    }

    res.status(200).json({
        message: 'Account deleted successfully'
    });
}