const AppError = require('../utils/appError');

const handleTokenError = () =>
  new AppError('Invalid token! Please log in again.', 401);

const handleTokenExpiredError = () =>
  new AppError('Your token has expired! Please log in again.', 401);

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
    error: err,
  });
};

const sendErrorProd = (err, res) => {
  // Operational error. Send specific messages to the client.
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
  // Programming or other unknown error: Don't leak details to the client.
  else {
    // 1) Log the error for developers
    console.error('Unknown or programming error', err);

    // 2) Send Generic message to client
    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong',
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    if (error.name === 'JsonWebTokenError') error = handleTokenError();
    if (error.name === 'TokenExpiredError') error = handleTokenExpiredError();
    sendErrorProd(err, res);
  }
};
