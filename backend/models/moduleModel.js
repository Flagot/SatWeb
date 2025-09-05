const mongoose = require("mongoose");

const moduleSchema = new mongoose.Schema(
  { module_id: { type: Number }, title: { type: String, required: true } },
  { timestamps: true }
);

module.exports = mongoose.model("modules", moduleSchema, "modules");
