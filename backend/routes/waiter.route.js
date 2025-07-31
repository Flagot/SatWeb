const express = require("express");

const router = express.Router();

const {
  createwaiter,
  getwaiters,
  getwaiter,
  deletewaiter,
  updatewaiter,
} = require("../controllers/waitercontrol");

router.get("/", getwaiters);

router.get("/:id", getwaiter);

router.post("/", createwaiter);

router.delete("/:id", deletewaiter);

router.patch("/:id", updatewaiter);

module.exports = router;
