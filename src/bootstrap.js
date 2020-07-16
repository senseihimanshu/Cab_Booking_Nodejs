const User = require('./models/User');
const Cab = require('./models/Cab');
const CabLocation = require('./models/CabLocation');
const Booking = require('./models/Booking');

module.exports = () => {
  Cab.hasOne(CabLocation, { as: 'CabLocation', foreignKey: 'cabId' });
  CabLocation.belongsTo(Cab, { as: 'Cab', foreignKey: 'cabId' });
  User.hasMany(Booking, { as: 'Bookings', foreignKey: 'userId' });
  Booking.belongsTo(User, { as: 'User', foreignKey: 'userId' });
  Cab.hasMany(Booking, { as: 'Bookings', foreignKey: 'cabId' });
  Booking.belongsTo(Cab, { as: 'Cab', foreignKey: 'cabId' });
};
