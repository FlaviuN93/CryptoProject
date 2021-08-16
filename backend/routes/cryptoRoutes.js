const express = require('express');
const {
  getAllCrypto,
  getCryptoByName,
} = require('../controllers/cryptoController.js');
const router = express.Router();

router.route('/').get(getAllCrypto);
router.route('/:name').post(getCryptoByName);

module.exports = router;
