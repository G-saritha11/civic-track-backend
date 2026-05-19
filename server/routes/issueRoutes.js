const express = require("express");
const router = express.Router();

const Issue = require("../models/issue");

const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../multerConfig");

// GET ALL ISSUES
router.get("/", async (req, res) => {
  try {
    const issues = await Issue.find();

    for (let issue of issues) {

      const createdDate =
        new Date(issue.createdAt);

      const currentDate =
        new Date();

      const diffTime =
        currentDate - createdDate;

      const diffDays =
        diffTime / (1000 * 60 * 60 * 24);

      if (
        diffDays > 7 &&
        issue.status !== "Resolved" &&
        !issue.isEscalated
      ) {

        issue.isEscalated = true;

        issue.escalatedAt =
          new Date();

        await issue.save();
      }
    }

    const updatedIssues =
      await Issue.find();

    res.json(updatedIssues);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

// MY COMPLAINTS
router.get("/my-complaints", authMiddleware, async (req, res) => {

  const issues = await Issue.find({
    userId: req.user.id,
  });

  res.json(issues);
});

// CREATE ISSUE
router.post(
  "/",
  authMiddleware,
  upload.single("image"),
  async (req, res) => {
   const newIssue = new Issue({
  title: req.body.title,
  description: req.body.description,
  location: req.body.location,
  category: req.body.category,

  image: req.file
    ? req.file.filename
    : "",

  username: req.body.username,

  userId: req.user.id,
});
    await newIssue.save();

    res.json(newIssue);
  }
);

// UPDATE STATUS + FEEDBACK
router.put("/:id", async (req, res) => {
  const updatedIssue = await Issue.findByIdAndUpdate(
    req.params.id,
    {
      status: req.body.status,
      feedback: req.body.feedback,
    },
    { new: true }
  );

  res.json(updatedIssue);
});

// FEEDBACK IMAGE UPLOAD
router.put(
  "/feedback/:id",
  authMiddleware,
  upload.single("image"),
  async (req, res) => {

    try {

      const complaint =
        await Issue.findById(req.params.id);

      if (!complaint) {
        return res.status(404).json({
          message: "Complaint not found",
        });
      }

      complaint.feedbackImage =
        req.file.filename;

      await complaint.save();

      res.json({
        message: "Feedback uploaded successfully",
        data: complaint,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message: "Server Error",
      });

    }

  }
);

// DELETE COMPLAINT
router.delete("/:id", async (req, res) => {
  try {
    await Issue.findByIdAndDelete(req.params.id);

    res.json({
      message: "Complaint Deleted",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Delete Failed",
    });
  }
});

module.exports = router;