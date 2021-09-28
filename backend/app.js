const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const cryptoRouter = require('./routes/cryptoRoutes.js');
const userRouter = require('./routes/userRoutes.js');
const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError.js');

const app = express();
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});
app.use(morgan('dev'));

//Routes
app.use('/api/v1/crypto', cryptoRouter);
app.use('/api/v1/users', userRouter);
app.use((req, res, next) => {
  next();
});

app.all('*', (req, res, next) =>
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
);
app.use(globalErrorHandler);

module.exports = app;
