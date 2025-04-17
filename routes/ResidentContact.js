import express from 'express';
import {
  getFamilyContacts,
  readFamilyContacts,
  createFamilyContacts,
} from '../controllers/ResidentContactController.js';

const router = express.Router();

router.get('/', getFamilyContacts);
router.get('/:id', readFamilyContacts);
router.post('/create', createFamilyContacts);

export default router;