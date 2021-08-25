const fs = require('fs');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const users = JSON.parse(fs.readFileSync(`${__dirname}/data/users.json`));

exports.getAllUsers = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});

exports.getUserById = catchAsync(async (req, res, next) => {
  const id = req.params.id * 1;
  const user = users.find((user) => user.id === id);

  if (id > users.length) {
    return next(new AppError('User not found.', 404));
  }

  createSendToken(user, 200, res);
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const id = req.params.id * 1;
  if (id > users.length) {
    return next(new AppError('User not found.', 404));
  }
  createSendToken('Update user', 200, res);
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  const id = req.params.id * 1;
  if (id > users.length) {
    return next(new AppError('User not found.', 404));
  }
  createSendToken(null, 200, res);
});
