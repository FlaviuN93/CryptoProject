/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`CREATE TABLE cryptos (

  
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  name VARCHAR(50) NOT NULL,
  short VARCHAR(10) NOT NULL,
  iconURL VARCHAR(50) NOT NULL,
  lat REAL CHECK(lat IS NULL OR (lat >= -90 AND lat <=90)),
  lng REAL CHECK(lng IS NULL OR (lng >= -180 AND lng <=180)),
  price_id INTEGER NOT NULL REFERENCES prices(id)
  );
  `);
};

exports.down = (pgm) => {
  pgm.sql(`DROP TABLE cryptos;`);
};
