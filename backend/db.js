const { Pool } = require('pg');

// const pool = new Pool({
//   host: process.env.PG_HOST,
//   port: process.env.PG_PORT,
//   database: process.env.PG_DATABASE,
//   user: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
// });
const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'cryptoProject',
  user: 'postgres',
  password: 'randomPassword',
});

module.exports = pool;
