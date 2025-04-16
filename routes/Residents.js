// Import modules
const express = require("express");

// Import UserController
const ResidentController = require("../controllers/ResidentController");

// Create router
const router = express.Router();

// Routers
router.get("/", ResidentController.getResidents);
router.get("/:id", ResidentController.readResident);
router.post("/create", ResidentController.createResidents);
router.delete("/delete/:id", ResidentController.deleteResident);

module.exports = router;
