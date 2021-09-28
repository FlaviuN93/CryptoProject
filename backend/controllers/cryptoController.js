const fs = require('fs');
const CoinGecko = require('coingecko-api');
const catchAsync = require('../utils/catchAsync');

const cryptos = JSON.parse(fs.readFileSync(`${__dirname}/data/crypto.json`));
const CoinGeckoClient = new CoinGecko();
exports.getAllCrypto = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: cryptos.length,
    data: {
      cryptos,
    },
  });
};

exports.getCryptoByName = (req, res) => {
  const data = req.body;
  let selectedCrypto = [];
  data.map((name) => {
    const foundValue = cryptos.find((crypto) => crypto.name === name);
    selectedCrypto.push(foundValue);
    return selectedCrypto;
  });

  res.status(200).json({
    status: 'success',
    data: {
      selectedCrypto,
    },
  });
};

exports.trendCrypto = catchAsync(async (req, res) => {
  // let timeline = 1000 * 60 * 60 * 24 * 30;
  const trendingCrypto = await CoinGeckoClient.coins.markets({
    ids: ['bitcoin', 'ethereum', 'binancecoin', 'solana'],
    price_change_percentage: '30d',
  });

  const firstDate = new Date('2021.04.12').getTime() / 1000;
  const lastDate = new Date('2021.08.12').getTime() / 1000;
  const { data } = await CoinGeckoClient.coins.fetchMarketChartRange(
    'bitcoin',

    { from: firstDate, to: lastDate }
  );
  console.log(data.prices);

  res.status(200).json({
    status: 'success',
    data: {
      trendingCrypto,
    },
  });
});
