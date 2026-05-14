const express = require("express");

console.log("USER ROUTES FILE RUNNING");

const router = express.Router();

const User = require("../models/user");

const jwt = require("jsonwebtoken");

// GET ALL USERS
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// REGISTER
router.post("/register", async (req, res) => {
  try {

    console.log(req.body);

    const user = new User(req.body);

    await user.save();

    res.json(user);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Registration Failed" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({
      email,
      password,
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      { id: user._id },
      "mysecretkey"
    );
    
    console.log("TOKEN CREATED:", token);

    res.json({
      message: "Login Successful",
      token,
      user,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Login Failed" });
  }
});

module.exports = router;