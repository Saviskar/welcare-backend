import express from "express";
import {
  getResidentContacts,
  getResidentContact,
  createNewResidentContact,
  updateResidentContact,
  deleteResidentContact,
} from "../controllers/ResidentContactController.js";

const router = express.Router();

router.get("/", getResidentContacts);
router.get("/:id", getResidentContact);
router.post("/", createNewResidentContact);
router.put("/:id", updateResidentContact);
router.delete("/:id", deleteResidentContact);

export default router;
