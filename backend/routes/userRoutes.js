const express = require('express');
const {
  getAllUsers,
  updateUser,
  deleteUser,
  createUser,
  getUserById,
  login,
  signup,
} = require('../controllers/userController.js');

const router = express.Router();

router.route('/login').post(login);
router.route('/signup').post(signup);
router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getUserById).patch(updateUser).delete(deleteUser);

module.exports = router;
