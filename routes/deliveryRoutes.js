import express from 'express';
import {
  getAllOffices,
  getOfficeById,
  createOffice,
  updateOffice,
  deleteOffice
} from '../controllers/deliveryController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);

router.route('/')
  .get(getAllOffices)
  .post(createOffice);

router.route('/:id')
  .get(getOfficeById)
  .put(updateOffice)
  .delete(deleteOffice);

export default router;