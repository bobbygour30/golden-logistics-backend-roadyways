import jwt from 'jsonwebtoken';

// Generate JWT Token
export const generateToken = (userId, email) => {
    return jwt.sign(
        { id: userId, email: email, role: 'admin' },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );
};

// Verify JWT Token
export const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return null;
    }
};