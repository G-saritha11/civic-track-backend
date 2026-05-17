console.log("NEW SERVER FILE RUNNING");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const issueRoutes = require("./routes/issueRoutes");
const supportRoutes = require("./routes/supportRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.get("/test", (req, res) => {
  res.send("Backend route working");
});

app.use("/api/users", userRoutes);
app.use("/api/issues", issueRoutes);
app.use("/api/support", supportRoutes);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((err) => console.log("DB Error:", err));