import express from 'express';

import UserRoutes from './User.js';
import ResidentRoutes from './Residents.js';
import ResidentContactRoutes from './ResidentContact.js';
import GuardianRoutes from './Guardian.js';
import { authenticate } from '../middlewares/auth.js';

const router = express.Router();

router.use('/user', UserRoutes);

//router.use(authenticate)

router.use('/resident', ResidentRoutes);
router.use('/residentContact', ResidentContactRoutes);
router.use('/guardian', GuardianRoutes);

export default router;
