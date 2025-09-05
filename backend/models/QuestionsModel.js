const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    question_id: { type: Number },
    description: { type: String },
    questionText: { type: String },
    choices: [
      {
        text: { type: String },
        isCorrect: { type: Boolean, default: false },
      },
    ],
    exam: { type: Number, ref: "exams" },
    section: { type: Number, ref: "sections" },
    module: { type: Number, ref: "modules" },
  },
  { timestamps: true }
);
``;
module.exports = mongoose.model("questions", questionSchema, "questions");
