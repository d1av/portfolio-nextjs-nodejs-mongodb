const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const controller = require("../controller");

router
  .route("/")
  .get(controller.getSkills)
  .post(protect, controller.postSkills);

router
  .route("/:id")
  .put(protect, controller.putSkills)
  .delete(protect, controller.deleteSkills)
  .get(controller.getOneSkill);

module.exports = router;
