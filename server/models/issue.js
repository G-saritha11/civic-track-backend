const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
    title: String,
    description: String,
    location: String,

    status: {
        type: String,
        default: "Pending"
    },

    username: String
});

module.exports = mongoose.model("Issue", issueSchema);