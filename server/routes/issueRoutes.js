const express = require("express");
const router = express.Router();

const Issue = require("../models/Issue");

/* CREATE ISSUE */
router.post("/", async(req, res) => {

    const issue = new Issue(req.body);

    await issue.save();

    res.json(issue);
});

/* GET ALL ISSUES */
router.get("/", async(req, res) => {

    const issues = await Issue.find();

    res.json(issues);
});

/* UPDATE ISSUE STATUS */
router.put("/:id", async(req, res) => {

    const updated = await Issue.findByIdAndUpdate(
        req.params.id,
        req.body, { new: true }
    );

    res.json(updated);
});

module.exports = router;