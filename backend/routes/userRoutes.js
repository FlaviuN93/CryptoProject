const express = require('express');
const {
  getAllUsers,
  updateUser,
  deleteUser,
  createUser,
  getUserById,
} = require('../controllers/userController.js');

const router = express.Router();

router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getUserById).patch(updateUser).delete(deleteUser);

module.exports = router;
