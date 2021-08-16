const express = require('express');
const morgan = require('morgan');
const cryptoRouter = require('./routes/cryptoRoutes.js');
const userRouter = require('./routes/userRoutes.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

module.exports = app;
