const Exam = require("../models/examModel");
const mongoose = require("mongoose");

// get all exams
const getexams = async (req, res) => {
  const exams = await Exam.find({}).sort({ createdAt: -1 });

  res.status(200).json(exams);
};

// get a single exam
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

// create a new exam
// const createexam = async (req, res) => {
//   //   try {
//   //     const { questions } = req.body;

//   //     if (!Array.isArray(questions) || questions.length === 0) {
//   //       return res.status(400).json({ message: "Questions array is required." });
//   //     }

//   //     const exam = new Exam({ questions });
//   //     await exam.save();

//   //     res.status(201).json({ message: "Exam created successfully.", exam });
//   //   } catch (err) {
//   //     console.error("Error creating exam:", err);
//   //     res.status(500).json({ message: "Internal server error." });
//   //   }
//   const createExam = async (req, res) => {
//     try {
//       const { title, price, timeLimit } = req.body;

//       const totalQuestions = questions ? questions.length : 0;

//       const newExam = new Exam({
//         title,
//         price,
//         timeLimit,
//         totalQuestions,
//       });

//       const savedExam = await newExam.save();

//       res.status(201).json({
//         message: "Exam created successfully",
//         data: savedExam,
//       });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Failed to create exam", error });
//     }
//   };
// };
// const createexam = async (req, res) => {
//   //   try {
//   //     const { questions } = req.body;

//   //     if (!Array.isArray(questions) || questions.length === 0) {
//   //       return res.status(400).json({ message: "Questions array is required." });
//   //     }

//   //     const exam = new Exam({ questions });
//   //     await exam.save();

//   //     res.status(201).json({ message: "Exam created successfully.", exam });
//   //   } catch (err) {
//   //     console.error("Error creating exam:", err);
//   //     res.status(500).json({ message: "Internal server error." });
//   //   }
const createexam = async (req, res) => {
  if (Array.isArray(req.body)) {
    const exams = await Exam.insertMany(req.body);
    res.status(201).json(exams);
  } else {
    try {
      const { exam_id, title } = req.body;
      const newExam = new Exam({
        exam_id,
        title,
      });

      const savedExam = await newExam.save();

      res.status(201).json({
        message: "Exam created successfully",
        data: savedExam,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to create exam", error });
    }
  }
};
// delete a exam
const deleteexam = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedExam = await Exam.findByIdAndDelete(id);

    if (!deletedExam) {
      return res.status(404).json({ message: "Exam not found." });
    }

    res.status(200).json({ message: "Exam deleted successfully." });
  } catch (error) {
    console.error("Error deleting exam:", error);
    res.status(500).json({ message: "Failed to delete exam." });
  }
};

// update a exam
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
