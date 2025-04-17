import express from 'express';
import {
  getResidents,
  readResident,
  createResidents,
  deleteResident,
} from '../controllers/ResidentController.js';

const router = express.Router();

router.get('/', getResidents);
router.get('/:id', readResident);
router.post('/create', createResidents);
router.delete('/delete/:id', deleteResident);

export default router;