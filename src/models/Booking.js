const Sequelize = require('sequelize');

module.exports = global.sequelize.define(
  'Booking',
  {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      field: 'user_id',
      type: Sequelize.INTEGER(11),
      references: 'users',
      referencesKey: 'id',
    },
    cabId: {
      field: 'cab_id',
      type: Sequelize.INTEGER(11),
      references: 'cabs',
      referencesKey: 'id',
    },
    sourceLatitude: {
      field: 'source_latitude',
      type: Sequelize.FLOAT(14, 7),
    },
    sourceLongitude: {
      field: 'source_longitude',
      type: Sequelize.FLOAT(14, 7),
    },
    destinationLatitude: {
      field: 'destination_latitude',
      type: Sequelize.FLOAT(14, 7),
    },
    destinationLongitude: {
      field: 'destination_longitude',
      type: Sequelize.FLOAT(14, 7),
    },
    startTime: {
      field: 'start_time',
      type: Sequelize.DATE,
    },
    endTime: {
      field: 'end_time',
      type: Sequelize.DATE,
    },
  },
  {
    tableName: 'bookings',
    timestamps: false,
  }
);
