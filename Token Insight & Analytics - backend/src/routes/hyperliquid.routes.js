const router = require("express").Router();
const { getWalletPnL } = require("../controllers/hyperliquid.controller");

router.get("/:wallet/pnl", getWalletPnL);
module.exports = router;
