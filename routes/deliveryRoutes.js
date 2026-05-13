import express from 'express';
import {
  getAllOffices,
  getOfficeById,
  createOffice,
  updateOffice,
  deleteOffice
} from '../controllers/deliveryController.js';
// Remove protect import if not used elsewhere
// import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Remove this line - no JWT protection needed
// router.use(protect);

router.route('/')
  .get(getAllOffices)
  .post(createOffice);

router.route('/:id')
  .get(getOfficeById)
  .put(updateOffice)
  .delete(deleteOffice);

export default router;