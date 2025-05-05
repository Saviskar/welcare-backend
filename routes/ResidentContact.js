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
router.post("/create", createNewResidentContact);
router.put("/update/:id", updateResidentContact);
router.delete("/delete/:id", deleteResidentContact);

export default router;
