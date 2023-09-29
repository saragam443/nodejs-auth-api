const logger = (req, res, next) => {
  console.log(`${req.headers.origin} : ${req.method} ${req.path}`);
  next();
};

module.exports = { logger };
