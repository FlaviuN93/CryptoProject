// Catches error from async functions. No need for try catch inside handlers.
module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(err));
  };
};
