const mongoose = require("mongoose");

const attemptSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    exam: { type: mongoose.Schema.Types.ObjectId, ref: "Exam", required: true },
    answers: [
      {
        question: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
        selectedChoices: [String], // IDs or text of selected answers
        isCorrect: { type: Boolean },
        markedForReview: { type: Boolean, default: false },
      },
    ],
    score: { type: Number },
    timeTaken: { type: Number }, // in seconds
    completedAt: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Attempt", attemptSchema);
