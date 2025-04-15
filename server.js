// Import modules
const express = require("express");
const cors = require("cors");

// App and port
const app = express();
const PORT = 3000;

// Cross origin resource sharing
app.use(cors());

// Parses data and makes it available in req.body
app.use(express.json());

// Import Routes
const UserRoutes = require("./routes/User");
const ResidentRoutes = require("./routes/Residents");
const ResidentContactRoutes = require("./routes/ResidentContact");
const GuardianRoutes = require("./routes/Guardian");

// Use Routes
app.use("/users", UserRoutes);
app.use("/residents", ResidentRoutes);
app.use("/residentContacts", ResidentContactRoutes);
app.use("/guardians", GuardianRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Server runs on port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
