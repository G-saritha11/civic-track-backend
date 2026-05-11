const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

/* ROUTES */
//const userRoutes = require("./routes/userRoutes");
//const issueRoutes = require("./routes/issueRoutes");

//app.use("/api/users", userRoutes);
//app.use("/api/issues", issueRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.listen(5000, () => {
    console.log("Server running on port 5000");
});