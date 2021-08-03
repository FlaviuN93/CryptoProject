const fs = require('fs');

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

exports.getCryptoById = (req, res) => {
  const id = req.params.id * 1;
  const crypto = cryptos.find((crypto) => crypto.id === id);

  if (id > cryptos.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'invalid id',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      crypto,
    },
  });
};
