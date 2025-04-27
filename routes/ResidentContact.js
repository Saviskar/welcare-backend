import express from "express";
import {
  getResidentContacts,
  getResidentContact,
  createNewResidentContact,
} from "../controllers/ResidentContactController.js";

const router = express.Router();

router.get("/", getResidentContacts);
router.get("/:id", getResidentContact);
router.post("/create", createNewResidentContact);
// router.delete("/delete:id", ) // all the top functions are working only have to make delete function work

export default router;
