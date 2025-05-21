import express from "express";
import { authenticate, getAllUsers, login } from "../controllers/UserController.js";

const router = express.Router();

//login
router.post("/login", login);

//authenticate
router.get("/authenticate", authenticate);

export default router;
