const express = require("express");

const router = express.Router();

const {
  createexam,
  getexams,
  getexam,
  deleteexam,
  updateexam,
} = require("../controllers/examController");

router.get("/", getexams);

router.get("/:id", getexam);

router.post("/", createexam);

router.delete("/:id", deleteexam);

router.patch("/:id", updateexam);

module.exports = router;
