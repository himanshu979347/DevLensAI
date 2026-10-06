require("dotenv").config();

const express= require("express");
const cors= require("cors");
const analyzeRoutes = require("./routes/analyzeRoutes");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app= express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/", analyzeRoutes);

app.get("/", (req, res) => {
    res.send("DevLens AI Backend Running 🚀");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});