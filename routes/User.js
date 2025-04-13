// Import modules
const express = require("express");

// Import UserController
const UserController = require("../controllers/UserController");

// Create router
const router = express.Router();

// Routers
router.get("/", UserController.get);

module.exports = router;
