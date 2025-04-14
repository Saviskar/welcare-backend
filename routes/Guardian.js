// Import modules
const express = require("express");

// Import UserController
const GuardianController = require("../controllers/GuardianController");

// Create router
const router = express.Router();

// Routers
router.get("/", GuardianController.getGuardians);
router.post("/create", GuardianController.createGuardians);

module.exports = router;
