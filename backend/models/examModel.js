const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExamSchema = new mongoose.Schema({
  questions: [
    {
      text: { type: String },
      choices: [
        {
          text: { type: String },
        },
      ],
    },
  ],
});

module.exports = mongoose.model("exam", ExamSchema, "exam");
