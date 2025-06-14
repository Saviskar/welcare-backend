import express from "express";
import {
  getResidents,
  getResidentById,
  createNewResident,
  deleteResident,
  updateResidentById,
} from "../controllers/ResidentController.js";

const router = express.Router();

router.get("/", getResidents);
router.get("/:id", getResidentById);
router.post("/", createNewResident);
router.put("/:id", updateResidentById);
router.delete("/:id", deleteResident);

export default router;
