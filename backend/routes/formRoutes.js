const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const controller = require("../controller");

router.route("/").get(protect, controller.getForm).post(controller.postForm);

router.delete("/:id", protect, controller.deleteForm);

module.exports = router;
