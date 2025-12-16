const { fetchWalletData } = require("../services/hyperliquid.service");
const { calculatePnL } = require("../utils/pnlCalculator");

exports.getWalletPnL = async (req, res) => {
  const data = await fetchWalletData(req.params.wallet);
  res.json(calculatePnL(data));
};
