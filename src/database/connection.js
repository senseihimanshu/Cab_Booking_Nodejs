const Sequelize = require('sequelize');
const dbConfig = require('config').database;

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
  }
);

module.exports = sequelize;
global.sequelize = sequelize;
