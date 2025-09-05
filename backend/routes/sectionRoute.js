const express = require("express");

const router = express.Router();

const {
  createsection,
  getsections,
} = require("../controllers/sectionController");

router.get("/sections", getsections);

// router.get("/exams/:id", getexam);

router.post("/sections", createsection);

// router.delete("/exams/:id", deleteexam);

// router.patch("/exams/:id", updateexam);

module.exports = router;
