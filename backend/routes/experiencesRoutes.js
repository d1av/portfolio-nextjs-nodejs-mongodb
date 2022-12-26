const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const controller = require("../controller");

router
  .route("/")
  .get(controller.getExperiences)
  .post(protect, controller.postExperiences);

router
  .route("/:id")
  .put(protect, controller.putExperiences)
  .delete(protect, controller.deleteExperiences)
  .get(controller.getOneExperience);

module.exports = router;
