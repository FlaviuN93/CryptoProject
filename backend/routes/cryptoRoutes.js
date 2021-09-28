const express = require('express');
const { protect } = require('../controllers/authController.js');
const {
  getAllCrypto,
  getCryptoByName,
  trendCrypto,
} = require('../controllers/cryptoController.js');
const router = express.Router();

router.route('/').get(getAllCrypto);
router.route('/trend').get(trendCrypto);
router.route('/:name').post(protect, getCryptoByName);

module.exports = router;
