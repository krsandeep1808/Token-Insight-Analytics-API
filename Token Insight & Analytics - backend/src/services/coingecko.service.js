const axios = require("axios");

exports.getTokenData = async (id, vs = "usd") => {
  const { data } = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${id}`
  );

  return {
    id: data.id,
    symbol: data.symbol,
    name: data.name,
    market_data: {
      current_price_usd: data.market_data.current_price[vs],
      market_cap_usd: data.market_data.market_cap[vs]
    }
  };
};
