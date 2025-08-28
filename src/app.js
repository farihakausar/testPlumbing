const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test root route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my API 🚀" });
});

module.exports = app;
