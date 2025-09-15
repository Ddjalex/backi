// Backend server for Temer Properties
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.send("✅ Backend is running");
});

// Import your routes (adjust paths as needed)
import authRoutes from "./server/authRoutes.js";      // example
import propertyRoutes from "./server/propertyRoutes.js"; // example

app.use("/api/auth", authRoutes);
app.use("/api/properties", propertyRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Temer Properties backend running on port ${PORT}`);
});
