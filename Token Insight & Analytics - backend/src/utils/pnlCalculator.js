exports.calculatePnL = (data) => {
  let equity = 10000;
  const daily = data.map(d => {
    const net = d.realized + d.unrealized - d.fees + d.funding;
    equity += net;
    return { ...d, net_pnl_usd: net, equity_usd: equity };
  });
  return { daily };
};
