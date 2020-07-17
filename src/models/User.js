const Sequelize = require('sequelize');

module.exports = global.sequelize.define(
  'User',
  {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      field: 'first_name',
      type: Sequelize.STRING(32),
      allowNull: false,
    },
    lastName: {
      field: 'last_name',
      type: Sequelize.STRING(32),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(32),
      unique: true,
      allowNull: false,
    },
  },
  {
    tableName: 'users',
    timestamps: false,
  }
);
