import express from 'express';

import UserRoutes from './User.js';
import ResidentRoutes from './Residents.js';
import ResidentContactRoutes from './ResidentContact.js';
import GuardianRoutes from './Guardian.js';

const router = express.Router();

router.use('/users', UserRoutes);
router.use('/residents', ResidentRoutes);
router.use('/residentContacts', ResidentContactRoutes);
router.use('/guardians', GuardianRoutes);

export default router;
