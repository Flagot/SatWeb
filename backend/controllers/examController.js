const Exam = require("../models/examModel");
const mongoose = require("mongoose");

// get all workouts
const getexams = async (req, res) => {
  const exams = await exam.find({}).sort({ createdAt: -1 });

  res.status(200).json(exams);
};

// get a single workout
const getexam = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such exam" });
  }

  const exam = await exam.findById(id);

  if (!exam) {
    return res.status(404).json({ error: "No such exam" });
  }

  res.status(200).json(exam);
};

// create a new workout
const createexam = async (req, res) => {
  try {
    const { questions } = req.body;

    if (!Array.isArray(questions) || questions.length === 0) {
      return res.status(400).json({ message: "Questions array is required." });
    }

    const exam = new Exam({ questions });
    await exam.save();

    res.status(201).json({ message: "Exam created successfully.", exam });
  } catch (err) {
    console.error("Error creating exam:", err);
    res.status(500).json({ message: "Internal server error." });
  }
};

// delete a workout
const deleteexam = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedExam = await exam.findByIdAndDelete(id);

    if (!deletedExam) {
      return res.status(404).json({ message: "Exam not found." });
    }

    res.status(200).json({ message: "Exam deleted successfully." });
  } catch (error) {
    console.error("Error deleting exam:", error);
    res.status(500).json({ message: "Failed to delete exam." });
  }
};

// update a workout
const updateexam = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such workout" });
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!workout) {
    return res.status(400).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

module.exports = {
  createexam,
  getexams,
  getexam,
  deleteexam,
  updateexam,
};
