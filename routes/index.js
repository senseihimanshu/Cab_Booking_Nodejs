const authenticator = require('../middlewares/authentication');
const controller = require('../controllers');

module.exports = app => {
  app.get('/api/bookings', authenticator, controller.booking.get);
};
