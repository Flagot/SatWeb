// const mongoose = require("mongoose");

// const ExamSchema = new mongoose.Schema({
//   questions: [
//     {
//       text: { type: String },
//       choices: [
//         {
//           text: { type: String },
//         },
//       ],
//     },
//   ],
// });

// module.exports = mongoose.model("exam", ExamSchema, "exam");
const mongoose = require("mongoose");

const examSchema = new mongoose.Schema(
  { exam_id: { type: Number }, title: { type: String, required: true } },
  { timestamps: true }
);

module.exports = mongoose.model("exams", examSchema, "exams");
