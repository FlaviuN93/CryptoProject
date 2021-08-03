const express = require('express');
const morgan = require('morgan');
const cryptoRouter = require('./routes/cryptoRoutes.js');
const userRouter = require('./routes/userRoutes.js');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/v1/crypto', cryptoRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
