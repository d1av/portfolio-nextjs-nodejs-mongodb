const express = require("express");
const router = express.Router();
const controller = require("../controller");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(controller.getAbout).post(protect, controller.postAbout);

router
  .route("/:id")
  .put(protect, controller.putAbout)
  .delete(protect, controller.deleteAbout)
  .get(controller.getOneAbout);

module.exports = router;
