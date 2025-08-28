const express = require("express");
const app = express();

app.use(express.json());

// Simple route
app.get("/", (req, res) => {
  res.json({ message: "🚀 Backend running on Vercel!" });
});

// Example POST
app.post("/echo", (req, res) => {
  res.json({ youSent: req.body });
});

// Export handler for Vercel
module.exports = app;
