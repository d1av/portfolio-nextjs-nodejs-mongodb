const mongoose = require("mongoose");

/* {  EXAMPLE
    title: "Web Development",
    projectLink: "#",
    codeLink: "#",
    imgUrl: images.about01,
    description: "Worked Here long time ago.",
    name: "Davi",
    tags: ["Software Industrie 2","3","4"],
  }, */

const workSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Provide the Title."] },
    projectLink: {
      type: String,
      required: [true, "Provide the Link to the project."],
      unique:true,
    },
    codeLink: {
      type: String,
      required: [true, "Provide the Code Link."],
      unique:true,
    },
    imgUrl: {
      type: String,
      required: [true, "Provide the url for the image."],
    },
    description: {
      type: String,
      required: [true, "Provide the Project description"],
    },
    name: { type: String, required: [true, "Provide the project author name"] },
    tags: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Work", workSchema);
