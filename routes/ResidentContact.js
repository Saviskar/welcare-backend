// Import modules
const express = require("express");

// Import UserController
const ResidentContactController = require("../controllers/ResidentContactController");

// Create router
const router = express.Router();

// Routers
router.get("/", ResidentContactController.getFamilyContacts);
router.get("/:id", ResidentContactController.getFamilyContactsById);
router.post("/create", ResidentContactController.createFamilyContacts);

module.exports = router;
