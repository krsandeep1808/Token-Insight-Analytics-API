const express = require("express");
const cors = require("cors");
require("dotenv").config();

const tokenRoutes = require("./routes/token.routes");
const hyperRoutes = require("./routes/hyperliquid.routes");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ ADD THIS HEALTH ROUTE
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.use("/api/token", tokenRoutes);
app.use("/api/hyperliquid", hyperRoutes);

app.listen(process.env.PORT || 3000, () =>
  console.log("Server running on port 3000")
);
