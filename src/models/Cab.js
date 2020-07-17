const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

module.exports = sequelize.define(
  'Cab',
  {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    cabCode: {
      field: 'cab_code',
      type: Sequelize.STRING(32),
      unique: true,
      allowNull: false,
    },
    driverName: {
      field: 'driver_name',
      type: Sequelize.STRING(32),
      allowNull: false,
    },
  },
  {
    tableName: 'cabs',
    timestamps: false,
  }
);
