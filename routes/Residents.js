import express from "express";
import {
  getResidents,
  getResidentById,
  createNewResident,
  deleteResident,
} from "../controllers/ResidentController.js";

const router = express.Router();

router.get("/", getResidents);
router.get("/:id", getResidentById);
router.post("/create", createNewResident);
router.delete("/delete/:id", deleteResident);

export default router;
