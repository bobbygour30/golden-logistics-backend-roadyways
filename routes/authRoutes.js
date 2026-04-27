import express from 'express';
import { 
    adminLogin, 
    adminLogout, 
    verifyTokenController, 
    getAdminInfo 
} from '../controllers/authController.js';

const router = express.Router();

// Public routes
router.post('/login', adminLogin);
router.post('/logout', adminLogout);
router.get('/verify-token', verifyTokenController);
router.get('/admin-info', getAdminInfo);

export default router;