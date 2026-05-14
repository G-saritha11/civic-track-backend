const express = require("express");
const router = express.Router();

const Issue = require("../models/issue");

const authMiddleware = require("../middleware/authMiddleware");

// GET ALL ISSUES
router.get("/", async (req, res) => {
  const issues = await Issue.find();
  res.json(issues);
});

// MY COMPLAINTS
router.get("/my-complaints", authMiddleware, async (req, res) => {

  const issues = await Issue.find({
    userId: req.user.id,
  });

  res.json(issues);
});

// CREATE ISSUE
router.post("/", authMiddleware, async (req, res) => {

  const newIssue = new Issue({
    ...req.body,
    userId: req.user.id,
  });

  await newIssue.save();

  res.json(newIssue);
});

// UPDATE STATUS
router.put("/:id", async (req, res) => {

  const updatedIssue = await Issue.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );

  res.json(updatedIssue);
});

module.exports = router;