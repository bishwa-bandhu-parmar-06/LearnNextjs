// expressLimiter.js
const rateLimit = require("express-rate-limit");

module.exports.savePasswordLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit to 10 requests per window per IP
  message: {
    status: 429,
    message: "Too many requests. Please try again after 15 minutes.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports.getPasswordLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5, // Allow more GET requests
  message: {
    status: 429,
    message: "Too many requests, please Try again later.",
  },
});


