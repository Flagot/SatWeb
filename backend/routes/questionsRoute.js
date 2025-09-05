const express = require("express");
const router = express.Router();

const {
  createQuestion,
  getQuestions,
  getQuestion,
  deleteQuestion,
  updateQuestion,
} = require("../controllers/QuestionController");

// Get all questions
router.get("/questions", getQuestions);

// Get single question
router.get("/questions/:id", getQuestion);

// Create question
router.post("/questions", createQuestion);

// Delete question
router.delete("/questions/:id", deleteQuestion);

// Update question
router.patch("/questions/:id", updateQuestion);

module.exports = router;
