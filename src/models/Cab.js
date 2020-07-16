const Sequelize = require('sequelize');

module.exports = global.sequelize.define(
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
