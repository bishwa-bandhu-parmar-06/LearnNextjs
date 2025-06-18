const express = require("express");
const router = express.Router();
const {
  savePasswordLimiter,
  getPasswordLimiter,
} = require("../expressLimiter");

const {
  savePassword,
  getAllPasswords,
  deletePassword,
  updatePassword,
} = require("../controller/passopControllers");

// Add limiter only to the sensitive route
router.post("/save-password", savePasswordLimiter, savePassword);

router.get("/all-password",getPasswordLimiter, getAllPasswords);
// Get All Passwords with Redis Cache

router.delete("/delete/:id", deletePassword);
router.put("/update/:id", updatePassword);

module.exports = router;
