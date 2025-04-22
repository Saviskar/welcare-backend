import express from "express";
import { getAllUsers, login } from "../controllers/UserController.js";

const router = express.Router();

//login
router.post("/login", login);

//logout

router.get("/", getAllUsers);

export default router;
