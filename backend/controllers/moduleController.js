const Module = require("../models/moduleModel");
const mongoose = require("mongoose");

const createmodule = async (req, res) => {
  try {
    const { module_id, title } = req.body;
    const newModule = new Module({
      module_id,
      title,
    });

    const savedModule = await newModule.save();

    res.status(201).json({
      message: "Module created successfully",
      data: savedModule,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create module", error });
  }
};

module.exports = {
  createmodule,
};
