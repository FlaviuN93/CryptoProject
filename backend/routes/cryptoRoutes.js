const express = require('express');
const {
  getAllCrypto,
  getCryptoById,
} = require('../controllers/cryptoController.js');
const router = express.Router();

router.route('/').get(getAllCrypto);
router.route('/:id').get(getCryptoById);

module.exports = router;
