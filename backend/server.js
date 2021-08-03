const dotenv = require('dotenv');
const app = require('./app.js');
dotenv.config();

//Start server
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
