const Question = require("../models/QuestionsModel");
const mongoose = require("mongoose");

// Get all questions
const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find({}).sort({ createdAt: -1 });
    res.status(200).json(questions);
  } catch (error) {
    console.error("Error fetching questions:", error);
    res.status(500).json({ message: "Failed to fetch questions." });
  }
};

// Get a single question
const getQuestion = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such question" });
  }

  const question = await Question.findById(id);

  if (!question) {
    return res.status(404).json({ error: "No such question" });
  }

  res.status(200).json(question);
};

// Create a new question

// const createQuestion = async (req, res) => {
//   try {
//     // const { questionText, questionType, choices, explanation } = req.body;

//     // if (!questionText) {
//     //   return res.status(400).json({ message: "Question text is required." });
//     // }

//     // const question = new Question({
//     //   questionText,
//     //   questionType,
//     //   choices,
//     //   explanation,
//     // });

//     // await question.save();
//     // res
//     //   .status(201)
//     //   .json({ message: "Question created successfully.", question });
//     const examId = req.params.examId; // taken from URL
//     const newQuestion = new Question({
//       questionText: req.body.questionText,
//       choices: req.body.choices,
//       exam: examId,
//     });
//     await newQuestion.save();
//     res.json(newQuestion);
//   } catch (err) {
//     console.error("Error creating question:", err);
//     res.status(500).json({ message: "Internal server error." });
//   }
// };

// Delete a question

const createQuestion = async (req, res) => {
  if (Array.isArray(req.body)) {
    const Questions = await Question.insertMany(req.body);
  }
  try {
    const {
      description,
      questionText,
      choices,
      exam_id,
      section_id,
      module_id,
    } = req.body;

    // if (!questionText) {
    //   return res.status(400).json({ message: "Question text is required." });
    // }

    const question = new Question({
      description,
      questionText,
      choices,
      exam_id,
      section_id,
      module_id,
    });

    await question.save();
    res
      .status(201)
      .json({ message: "Question created successfully.", question });
  } catch (err) {
    console.error("Error creating question:", err);
    res.status(500).json({ message: "Internal server error." });
  }
};

const deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedQuestion = await Question.findByIdAndDelete(id);

    if (!deletedQuestion) {
      return res.status(404).json({ message: "Question not found." });
    }

    res.status(200).json({ message: "Question deleted successfully." });
  } catch (error) {
    console.error("Error deleting question:", error);
    res.status(500).json({ message: "Failed to delete question." });
  }
};

// Update a question
const updateQuestion = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid question ID" });
  }

  const question = await Question.findOneAndUpdate(
    { _id: id },
    { ...req.body },
    { new: true }
  );

  if (!question) {
    return res.status(404).json({ error: "No such question" });
  }

  res.status(200).json(question);
};

module.exports = {
  createQuestion,
  getQuestions,
  getQuestion,
  deleteQuestion,
  updateQuestion,
};
