// Import modules
const express = require("express");

// Import UserController
const ResidentContactController = require("../controllers/ResidentContactController");

// Create router
const router = express.Router();

// Routers
router.get("/", ResidentContactController.getFamilyContacts);

module.exports = router;
