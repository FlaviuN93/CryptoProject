const express = require('express');
const { protect } = require('../controllers/authController.js');
const {
  getAllCrypto,
  getCryptoByName,
} = require('../controllers/cryptoController.js');
const router = express.Router();

router.route('/').get(getAllCrypto);
router.route('/:name').post(protect, getCryptoByName);

module.exports = router;
