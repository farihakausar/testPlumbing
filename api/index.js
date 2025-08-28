require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
console.log("Mongo URI:", process.env.MONGO_URI);


const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("✅ MongoDB connected");
    }
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
  }
};

// --- Import Real Models ---
const BoilerProtectionPlan = require("../src/models/BoilerProtectionPlan");
const BoilerService = require("../src/models/BoilerService");
const CommercialGas = require("../src/models/CommercialGas");
const ContactPage = require("../src/models/ContactPage");
const HomePage = require("../src/models/HomePage");
const HeatPump = require("../src/models/HeatPump");
const PlumbingPage = require("../src/models/PlumbingPage");

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- Root Test Route ---
app.get("/", (req, res) => {
  res.json({ message: "🚀 Welcome to my API running on Vercel!" });
});

// --- Helper GET ---
const getDocument = async (req, res, Model) => {
  try {
    await connectDB();
    let doc = await Model.findOne();
    if (!doc) {
      doc = await Model.create({});
      console.log(`Initialized ${Model.modelName}`);
    }
    res.json(doc);
  } catch (err) {
    console.error(`Error fetching ${Model.modelName}:`, err);
    res.status(500).json({ message: `Error fetching ${Model.modelName}` });
  }
};

// --- Helper POST ---
const updateDocument = async (req, res, Model) => {
  try {
    await connectDB();
    const updatedData = req.body;
    const doc = await Model.findOneAndUpdate({}, updatedData, {
      new: true,
      upsert: true,
      runValidators: true,
    });
    res.json({ success: true, data: doc });
  } catch (err) {
    console.error(`Error saving ${Model.modelName}:`, err);
    res.status(500).json({ message: `Error saving ${Model.modelName}` });
  }
};

// --- Routes ---
app.get("/api/homepage", (req, res) => getDocument(req, res, HomePage));
app.post("/api/homepage", (req, res) => updateDocument(req, res, HomePage));

app.get("/api/boilerservices", (req, res) => getDocument(req, res, BoilerService));
app.post("/api/boilerservices", (req, res) => updateDocument(req, res, BoilerService));

app.get("/api/plumbing", (req, res) => getDocument(req, res, PlumbingPage));
app.post("/api/plumbing", (req, res) => updateDocument(req, res, PlumbingPage));

app.get("/api/commercialgas", (req, res) => getDocument(req, res, CommercialGas));
app.post("/api/commercialgas", (req, res) => updateDocument(req, res, CommercialGas));

app.get("/api/heatpumps", (req, res) => getDocument(req, res, HeatPump));
app.post("/api/heatpumps", (req, res) => updateDocument(req, res, HeatPump));

app.get("/api/boilerprotectionplan", (req, res) => getDocument(req, res, BoilerProtectionPlan));
app.post("/api/boilerprotectionplan", (req, res) => updateDocument(req, res, BoilerProtectionPlan));

app.get("/api/contactpage", (req, res) => getDocument(req, res, ContactPage));
app.post("/api/contactpage", (req, res) => updateDocument(req, res, ContactPage));

// --- Export for Vercel ---
module.exports = app;
