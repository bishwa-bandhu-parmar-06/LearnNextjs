// Step 1: Load Environment Variables
const dotenv = require("dotenv");
dotenv.config(); // ✅ Ensure .env variables like PORT, MONGO_URI are available

// Step 2: Import Required Modules

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Step 3: Initialize Express App
const app = express();

// Step 4: Connect to Database
const ConnectDB = require("./Database/dbConfig");
ConnectDB(); // ✅ Establish MongoDB connection first
// ✅ Step 5: Use CORS Middleware
app.use(cors({
  origin: process.env.FRONTEND_URI || "http://localhost:5173", // Your frontend URL
  credentials: true,
}));

// Step 5: Middlewares (global)
app.use(bodyParser.json()); // ✅ For parsing JSON bodies

// Step 6: Import and Use Routes
const passopRoutes = require("./routes/passopRoutes");
app.use("/api", passopRoutes); // ✅ All passop-related routes will be under /api

// Step 7: Base Route (Optional)
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Step 8: Start the Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`🚀 Server running at: http://localhost:${port}`);
});
