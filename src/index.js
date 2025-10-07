require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: " Node.js backend!" });
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});