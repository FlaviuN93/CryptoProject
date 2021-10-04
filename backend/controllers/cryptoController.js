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
  const trendingCrypto = await CoinGeckoClient.coins.markets({
    ids: ['bitcoin', 'ethereum', 'binancecoin', 'solana', 'dogecoin'],
    price_change_percentage: '30d',
  });

  res.status(200).json({
    status: 'success',
    data: {
      trendingCrypto,
    },
  });
});
