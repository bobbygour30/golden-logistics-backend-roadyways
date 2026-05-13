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
// Remove protect import if not used elsewhere
// import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Remove this line - no JWT protection needed
// router.use(protect);

// Routes (all public now)
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