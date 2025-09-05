const express = require("express");

const router = express.Router();

const {
  createexam,
  getexams,
  getexam,
  deleteexam,
  updateexam,
} = require("../controllers/examController");

router.get("/exams", getexams);

router.get("/exams/:id", getexam);

router.post("/exams", createexam);

router.delete("/exams/:id", deleteexam);

router.patch("/exams/:id", updateexam);

module.exports = router;
