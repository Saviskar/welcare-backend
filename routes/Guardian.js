// Import modules
import express from 'express';

// Import GuardianController using dynamic import or updated export style
import { getGuardians, createGuardians, readGuardians } from '../controllers/GuardianController.js';

// Create router
const router = express.Router();

// Routers
router.get("/", getGuardians);
router.post("/create", createGuardians);
router.get("/:id", readGuardians);

// Export router using ESM
export default router;
