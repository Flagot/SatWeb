const express = require("express");

const router = express.Router();

const { createmodule } = require("../controllers/moduleController");

// router.get("/exams", getexams);

// router.get("/exams/:id", getexam);

router.post("/modules", createmodule);

// router.delete("/exams/:id", deleteexam);

// router.patch("/exams/:id", updateexam);

module.exports = router;
