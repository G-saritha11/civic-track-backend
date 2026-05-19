const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
    title: String,
    category: String,
    description: String,
    location: String,

    image: {
    type: String,
    default: "",
    },

    status: {
        type: String,
        default: "Pending"
    },

    isEscalated: {
  type: Boolean,
  default: false,
},

escalatedAt: {
  type: Date,
},

    feedback: {
  type: String,
  default: "",
},

    username: String,

     userId: String, 
}, { timestamps: true });

module.exports = mongoose.model("Issue", issueSchema);