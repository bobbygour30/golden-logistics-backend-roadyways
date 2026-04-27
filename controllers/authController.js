import { generateToken } from '../utils/generateToken.js';

// Admin login controller
export const adminLogin = async (req, res) => {
    try {
        const { email, password, rememberMe } = req.body;

        // Get admin credentials from .env
        const adminEmail = process.env.ADMIN_GMAILID;
        const adminPassword = process.env.ADMIN_PASSWORD;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please provide both email and password'
            });
        }

        // Check email
        if (email !== adminEmail) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email address'
            });
        }

        // Check password
        if (password !== adminPassword) {
            return res.status(401).json({
                success: false,
                message: 'Invalid password'
            });
        }

        // Generate token
        const token = generateToken('admin', email);

        // Set cookie expiry based on remember me
        const maxAge = rememberMe ? 7 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000;

        // Set cookie options
        const cookieOptions = {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: maxAge
        };

        // Send token in cookie
        res.cookie('adminToken', token, cookieOptions);

        // Send success response
        res.status(200).json({
            success: true,
            message: 'Login successful',
            data: {
                email: email,
                role: 'admin',
                token: token
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

// Admin logout controller
export const adminLogout = async (req, res) => {
    try {
        res.clearCookie('adminToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        });

        res.status(200).json({
            success: true,
            message: 'Logout successful'
        });
    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

// Verify token controller
export const verifyTokenController = async (req, res) => {
    try {
        const token = req.cookies.adminToken || req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'No token provided'
            });
        }

        const { verifyToken } = await import('../utils/generateToken.js');
        const decoded = verifyToken(token);

        if (!decoded) {
            return res.status(401).json({
                success: false,
                message: 'Invalid or expired token'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Token is valid',
            data: {
                email: decoded.email,
                role: 'admin'
            }
        });
    } catch (error) {
        console.error('Verify token error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

// Get admin info
export const getAdminInfo = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            data: {
                email: process.env.ADMIN_EMAIL,
                role: 'admin'
            }
        });
    } catch (error) {
        console.error('Get admin info error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};