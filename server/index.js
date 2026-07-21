require("dotenv").config();
const express= require("express");
const cors= require("cors");
const analyzeRoutes = require("./routes/analyzeRoutes");

const app= express();
const PORT=5000;

app.use(cors());
app.use(express.json());
app.use("/", analyzeRoutes);

app.get("/", (req, res) => {
    res.send("DevLens AI Backend Running 🚀");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});