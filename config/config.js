const config = require('config');

module.exports = {
  [process.env.NODE_ENV || 'development']: config.database,
};
