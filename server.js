import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

// App and port
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Main Route
app.use("/api", routes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
