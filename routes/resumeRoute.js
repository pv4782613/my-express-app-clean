const express = require("express");
const multer = require("multer");
const { parseResume, matchResumeWithJob, getResumeInsights } = require("../controller/resumeController");

const router = express.Router();

// Multer configuration for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Upload resume and extract details
router.post("/upload", upload.single("resume"), parseResume);

// Compare resume with job description
router.post("/match", matchResumeWithJob);

// Generate AI-based resume insights
router.post("/insights", getResumeInsights);

module.exports = router;
