const express = require('express');
const { login, signup, protect } = require('../controllers/authController.js');
const {
  getAllUsers,
  updateUser,
  deleteUser,
  getUserById,
} = require('../controllers/userController.js');

const router = express.Router();

router.route('/login').post(login);
router.route('/signup').post(signup);
router.route('/').get(protect, getAllUsers);

router.route('/:id').get(getUserById).patch(updateUser).delete(deleteUser);

module.exports = router;
