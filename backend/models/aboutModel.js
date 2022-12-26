const mongoose = require("mongoose");

const AboutSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    imgUrl: {
      type: String,
      required: [true, "Please provide the image link"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("About", AboutSchema);
