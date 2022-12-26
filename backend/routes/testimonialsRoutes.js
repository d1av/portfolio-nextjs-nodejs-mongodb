const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const controller = require("../controller");

router
  .route("/")
  .get(controller.getTestimonials)
  .post(protect, controller.postTestimonials);

router
  .route("/:id")
  .put(protect, controller.putTestimonials)
  .delete(protect, controller.deleteTestimonials)
  .get(controller.getOneTestimonial)

module.exports = router;
