const Section = require("../models/sectionModel");
const mongoose = require("mongoose");

const getsections = async (req, res) => {
  const sections = await Section.find({}).sort({ createdAt: -1 });

  res.status(200).json(sections);
};
const createsection = async (req, res) => {
  try {
    const { section_id, title } = req.body;
    const newSection = new Section({
      section_id,
      title,
    });

    const savedSection = await newSection.save();

    res.status(201).json({
      message: "section created successfully",
      data: savedSection,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create section", error });
  }
};

module.exports = {
  createsection,
  getsections,
};
