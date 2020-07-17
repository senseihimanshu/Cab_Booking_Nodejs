const authenticator = require('../middlewares/authentication');
const controller = require('../controllers');

module.exports = app => {
  app.get('/api/booking', controller.booking.getAllByUserId);
  app.post('/api/booking', controller.booking.create);
  app.get('/api/cab', controller.cab.getNearbyCabs);
};
