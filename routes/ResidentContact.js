import express from "express";
import {
  getResidentContacts,
  getResidentContact,
  createNewResidentContact,
  deleteResidentContact,
} from "../controllers/ResidentContactController.js";

const router = express.Router();

router.get("/", getResidentContacts);
router.get("/:id", getResidentContact);
router.post("/create", createNewResidentContact);
router.delete("/delete/:id", deleteResidentContact);

export default router;
