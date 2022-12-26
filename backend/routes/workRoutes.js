const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const controller = require("../controller");

router.route("/").get(controller.getWork).post(protect, controller.postWork);

router
  .route("/:id")
  .put(protect, controller.putWork)
  .delete(protect, controller.deleteWork)
  .get(controller.getOneWork);

module.exports = router;
