// Import modules
const express = require("express");

// Import UserController
const ResidentController = require("../controllers/ResidentController");

// Create router
const router = express.Router();

// Routers
router.get("/", ResidentController.getResidents);
router.post("/create", ResidentController.createResidents);

module.exports = router;
