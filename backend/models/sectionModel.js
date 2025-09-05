const mongoose = require("mongoose");

const SectionSchema = new mongoose.Schema(
  { section_id: { type: Number }, title: { type: String, required: true } },
  { timestamps: true }
);

module.exports = mongoose.model("sections", SectionSchema, "sections");
