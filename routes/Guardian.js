// Import modules
import express from "express";

// Import GuardianController using dynamic import or updated export style
import {
  getGuardians,
  getGuardian,
  createNewGuardian,
  deleteGuardian,
} from "../controllers/GuardianController.js";

// Create router
const router = express.Router();

// Routers
router.get("/", getGuardians);
router.post("/create", createNewGuardian);
router.get("/:id", getGuardian);

// Export router using ESM
export default router;
