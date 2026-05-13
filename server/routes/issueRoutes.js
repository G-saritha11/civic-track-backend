const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const uploads = require("../multerConfig");
router.use(bodyParser.json());

const Issue = require("../models/Issue");

/* CREATE ISSUE */




// Create complaint
router.post(
    "/createComplaint",
    uploads.single("image"),
    async(req, res) => {
        try {
            const { title, description, location } =
            req.body;

            const issue = new Issue({
                title,
                description,
                location,
                image: req.file ?
                    req.file.filename : "",
            });

            await issue.save();

            res.status(201).json({
                success: true,
                message: "Complaint created",
                issue,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
);


/* GET ALL ISSUES */
router.get("/allComplaints", async(req, res) => {

    const issues = await Issue.find();

    res.json(issues);
});

/* UPDATE ISSUE STATUS */
router.put("/updateStatus/:id", async(req, res) => {

    const updated = await Issue.findByIdAndUpdate(
        req.params.id,
        req.body, { new: true }
    );

    res.json(updated);
});

module.exports = router;