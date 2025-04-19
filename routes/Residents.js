import express from 'express';
import {
  getResidents,
  getResidentById,
  createResident,
  deleteResident,
} from '../controllers/ResidentController.js';

const router = express.Router();

router.get('/', getResidents);
router.get('/:id', getResidentById);
router.post('/create', createResident);
router.delete('/delete/:id', deleteResident);

export default router;