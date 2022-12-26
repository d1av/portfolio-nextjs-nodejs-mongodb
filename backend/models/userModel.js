const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please inform the user Name."],
  },
  email: {
    type: String,
    required: [true, "Please provide the email."],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Enter the password"],
  },
});

module.exports = mongoose.model("User", userSchema);
