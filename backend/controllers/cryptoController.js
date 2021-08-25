const fs = require('fs');
const { trends } = require('../utils/cryptoFunctions');

const cryptos = JSON.parse(fs.readFileSync(`${__dirname}/data/crypto.json`));

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
  console.log(req.body);
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
