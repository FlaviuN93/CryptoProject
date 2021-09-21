/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
  ALTER TABLE users
  RENAME COLUMN username TO name;`);
};

exports.down = (pgm) => {
  pgm.sql(`ALTER TABLE users
          RENAME COLUMN name TO username;`);
};
