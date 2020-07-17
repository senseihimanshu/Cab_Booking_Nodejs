const authenticator = require('../middlewares/authentication');
const controller = require('../controllers');

module.exports = app => {
  app.get('/api/booking', authenticator, controller.booking.getAllByUserId);
  app.post('/api/booking', authenticator, controller.booking.create);
  app.get('/api/cab', authenticator, controller.cab.getNearbyCabs);
};
