import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import cookieParser from 'cookie-parser';

// App and port
const app = express();
//Cookie-parser is a middleware that parses cookies attached to the client request object.
const PORT = 3000;

// Middleware
app.use(cors({
  origin:"http://localhost:5173",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser('yf1V98sLDP'))

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
