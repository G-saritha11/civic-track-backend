const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.json());

const User = require("../models/User");

/* REGISTER */
router.post("/register", async(req, res) => {

    const user = new User(req.body);
    console.log("Registering user:", req.body); // Debug log    
    await user.save();

    res.json(user);
});

/* LOGIN */
router.post(
    "/login",
    async(req, res) => {

        try {
            const {
                username,
                password,
            } = req.body;

            const user =
                await User.findOne({
                    username,
                });

            if (!user) {
                return res
                    .status(400)
                    .json({
                        message: "Invalid credentials",
                    });
            } else if (
                user.password !==
                password
            ) {
                return res
                    .status(400)
                    .json({
                        message: "Invalid credentials",
                    });
            } else res.json({
                message: "Login Successful",
                user,
            });

        } catch (error) {
            res.status(500).json({
                message: "Server Error",
            });
        }
    }
);
module.exports = router;