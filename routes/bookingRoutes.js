import express from 'express';
import {
  getAllOffices,
  getOfficeById,
  createOffice,
  updateOffice,
  deleteOffice,
  getOfficesByRegion,
  getStats
} from '../controllers/bookingController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// All routes are protected
router.use(protect);

// Routes
router.route('/')
  .get(getAllOffices)
  .post(createOffice);

router.get('/stats', getStats);
router.get('/region/:region', getOfficesByRegion);

router.route('/:id')
  .get(getOfficeById)
  .put(updateOffice)
  .delete(deleteOffice);

export default router;