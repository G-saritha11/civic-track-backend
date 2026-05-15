const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
    title: String,
    category: String,
    description: String,
    location: String,

    location: String,

    image: {
    type: String,
    default: "",
    },

    status: {
        type: String,
        default: "Pending"
    },

    feedback: {
  type: String,
  default: "",
},

    username: String,

     userId: String, 
});

module.exports = mongoose.model("Issue", issueSchema);