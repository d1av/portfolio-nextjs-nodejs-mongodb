const about = require("./aboutController.js");
const skills = require("./skillsController.js");
const testimonials = require("./testimonialsController.js");
const work = require("./workController.js");
const form = require("./formController.js");
const experiences = require("./experiencesController.js");
const user = require("./userController");

module.exports = {
  ...user,
  ...about,
  ...skills,
  ...work,
  ...experiences,
  ...testimonials,
  ...form,
};
