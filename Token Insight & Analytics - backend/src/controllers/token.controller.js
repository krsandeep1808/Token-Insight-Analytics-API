const { getTokenData } = require("../services/coingecko.service");
const { getInsight } = require("../services/ai.service");
const { buildTokenPrompt } = require("../utils/promptBuilder");

exports.getTokenInsight = async (req, res) => {
  try {
    const token = await getTokenData(req.params.id, "usd");
    const insight = await getInsight(buildTokenPrompt(token));
    res.json({ token, insight });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
