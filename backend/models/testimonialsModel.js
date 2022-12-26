const mongoose = require("mongoose");

/* {
      imgUrl: images.flutter,Stringg
      name: "Testimonial",
      company: "Company",
      feedback: images.about01,
    },
 */

const testimonialsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Provide the of the Testimonial Author"],
    },
    company: {
      type: String,
      required: [true, "Provide the company of the Author"],
    },
    feedback: { type: String, required: [true, "Provide the Testimonial"] },
    imgUrl: {
      type: String,
      required: [true, "Provide the Image for the Testimonial"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Testimonials", testimonialsSchema);
