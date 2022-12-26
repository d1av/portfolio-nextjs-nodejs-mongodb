const express = require("express");
const router = express.Router();
const controller = require("../controller");
const { protect } = require("../middleware/authMiddleware");

router.post("/", controller.registerUser);
router.post("/login", controller.loginUser);
router.get("/me", protect, controller.getUserData);

module.exports = router;
