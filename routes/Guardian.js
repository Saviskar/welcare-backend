// Import modules
import express from "express";

// Import GuardianController using dynamic import or updated export style
import {
  getGuardians,
  getGuardian,
  createNewGuardian,
  updateGuardian,
  deleteGuardian,
} from "../controllers/GuardianController.js";

// Create router
const router = express.Router();

// Routers
router.get("/", getGuardians);
router.post("/create", createNewGuardian);
router.get("/:id", getGuardian);
router.put("/update/:id", updateGuardian);

// Export router using ESM
export default router;
