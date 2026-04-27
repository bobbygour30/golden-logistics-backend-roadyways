import { verifyToken } from '../utils/generateToken.js';

export const protect = async (req, res, next) => {
    try {
        let token;

        // Check for token in cookies
        if (req.cookies.adminToken) {
            token = req.cookies.adminToken;
        }
        // Check for token in Authorization header
        else if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Not authorized, no token'
            });
        }

        // Verify token
        const decoded = verifyToken(token);

        if (!decoded) {
            return res.status(401).json({
                success: false,
                message: 'Not authorized, invalid token'
            });
        }

        // Add user info to request
        req.user = decoded;
        next();
    } catch (error) {
        console.error('Auth middleware error:', error);
        res.status(401).json({
            success: false,
            message: 'Not authorized'
        });
    }
};