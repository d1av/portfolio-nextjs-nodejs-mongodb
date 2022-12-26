const mongoose = require("mongoose");

const formSchema = mongoose.Schema(
  {
    where: {
      type: String,
      required: [true, "Please inform where the requisiton comes from."],
    },
    name: { type: String, required: [true, "Inform the name."] },
    email: { type: String, required: [true, "Enter the email."], unique:true },
    message: { type: String, required: [true, "Enter the message"] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Form", formSchema);
