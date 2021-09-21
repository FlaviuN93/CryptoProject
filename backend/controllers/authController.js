const fs = require('fs');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const users = JSON.parse(fs.readFileSync(`${__dirname}/data/users.json`));

const signToken = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user);

  res.cookie('jwt', token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  });

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

//
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1) Check if email and password have been entered
  if (!email || !password) {
    return next(new AppError('Please provide email and password!', 400));
  }

  const identifiedUser = await users.find((user) => user.email === email);
  // 2) Check if user exists or if password is correct
  if (!identifiedUser || identifiedUser.password !== password) {
    return next(new AppError('Invalid Credentials', 401));
  }
  createSendToken(identifiedUser, 200, res);
});

/////////////////////////////////////////////////

exports.signup = catchAsync(async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;
  const hasUser = users.find((user) => user.email === email);

  if (hasUser) {
    return next(
      new AppError('Could not create user. Email already exists', 401)
    );
  }
  if (password !== confirmPassword) {
    return next(
      new AppError('Password and confirm password are not the same', 401)
    );
  }
  const newId = users[users.length - 1].id + 1;

  const createUser = {
    id: newId,
    name: name,
    email: email,
    password: password,
  };

  const newUser = Object.assign(createUser);
  users.push(newUser);
  fs.writeFile(
    `${__dirname}/data/users.json`,
    JSON.stringify(users),
    (err) => {}
  );
  createSendToken(newUser, 201, res);
});
/////////////////////////////////////////////////////////
/////////////////////////////////
exports.protect = catchAsync(async (req, res, next) => {
  //1)Get token and check if exists
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return next(
      new AppError('You are not logged in! Please log in to get access.', 401)
    );
  }
  //2) Verify token
  const verify = promisify(jwt.verify);
  const decoded = await verify(token, process.env.JWT_SECRET);

  //3) Check if user still exists

  const foundUser = users.find((user) => user.id === decoded.id);

  if (!foundUser) {
    return next(new AppError('The user with this token no longer exist.', 401));
  }
  //4) Check if user changed password after token was issued

  // Grant access to protected route
  req.user = foundUser;
  next();
});

// exports.updatePassword = catchAsync(async (req, res, next) => {
//   let user = users.find(req.user.id);
//   const { currentPassword, newPassword } = req.body;
//   // 1) Check if posted password is correct.
//   if (user.password !== currentPassword) {
//     return next(new AppError('Current password is wrong', 401));
//   }
//   // 2) If so update
//   user.password = currentPassword;

//   // 3) Log user in, send JWT
// });
