const mongoose = require("mongoose");

/* { EXAMPLE
      name: "javascript",
      bgColor: "fff000",
      icon: images.figma,
    }, */

const skillsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Provide the skill name."],
    },
    bgColor: {
      type: String,
      required: [true, "Provide an HTML color eg: #ffffff"],
    },
    icon: { type: String, required: [true, "Enter the link to the icon"] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Skills", skillsSchema);
