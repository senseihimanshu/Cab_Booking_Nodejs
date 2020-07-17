const Sequelize = require('sequelize');

module.exports = global.sequelize.define(
  'CabLocation',
  {
    cabId: {
      field: 'cab_id',
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: 'cabs',
      referencesKey: 'id',
    },
    cabLatitude: {
      field: 'cab_latitude',
      type: Sequelize.FLOAT(14, 7),
    },
    cabLongitude: {
      field: 'cab_longitude',
      type: Sequelize.FLOAT(14, 7),
    },
  },
  {
    tableName: 'cab_locations',
    timestamps: false,
  }
);
