const Sequelize = require('sequelize');

module.exports = global.sequelize.define(
  'CabLocation',
  {
    cabId: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: 'cabs',
      referencesKey: 'id',
    },
    cabLatitude: {
      field: 'cab_latitude',
      type: Sequelize.FLOAT(11, 10),
    },
    cabLongitude: {
      field: 'cab_longitude',
      type: Sequelize.FLOAT(11, 10),
    },
  },
  {
    tableName: 'cab_locations',
    timestamps: false,
  }
);
