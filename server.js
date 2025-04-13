// Import modules
const express = require("express");
const cors = require("cors");

// App and port
const app = express();
const PORT = 3000;
app.use(cors());

// Parses data and makes it available in req.body
app.use(express.json());

// Import Routes
const UserRoutes = require("./routes/User");
const ResidentRoutes = require("./routes/Residents");

// Use Routes
app.use("/users", UserRoutes);
app.use("/residents", ResidentRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Server runs on port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
