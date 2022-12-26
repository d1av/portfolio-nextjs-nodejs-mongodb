const mongoose = require("mongoose");

const experiencesSchema = mongoose.Schema(
  {
    year: {
      type: String,
      required: [true, "Please provide a year."],
    },
    name: {
      type: String,
      required: [true, "Enter the name."],
    },
    bgColor: {
      type: String,
      required: [true, "Enter an HTML background Color."],
    },
    icon: { type: String, required: [true, "Provide an link to the Icon."] },
    desc: { type: String, required: [true, "Enter the description."] },
    company: { type: String, required: [true, "Enter the company."] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Experiences", experiencesSchema);
