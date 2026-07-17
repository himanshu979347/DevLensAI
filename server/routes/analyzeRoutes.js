const express = require("express");

const router = express.Router();

const {
    analyzeRepository
} = require("../controllers/analyzeController");

router.post("/analyze", analyzeRepository);

module.exports = router;