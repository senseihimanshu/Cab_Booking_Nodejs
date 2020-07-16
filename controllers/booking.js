const bookingModel = require('../src/daos/bookingDao');

class Booking {
  create = async (req, res) => {
    const {
      userId,
      cabId,
      sourceLatitude,
      sourceLongitude,
      destinationLatitude,
      destinationLongitude,
    } = req.body;

    try {
      await bookingModel.createBooking({
        userId,
        cabId,
        sourceLatitude,
        sourceLongitude,
        destinationLatitude,
        destinationLongitude,
      });

      res.status(200).send({
        success: true,
        payload: {
          message: 'Booking has been created successfully',
        },
      });
    } catch (e) {
      res.status(500).send({
        success: false,
        payload: {
          message:
            'There is some problem occured, Please try again after some time',
        },
      });
    }
  };

  getAllById = async (req, res) => {
    try {
      const bookings = await bookingModel.getBookingsByUserId(req.query.userId);

      res.status(200).send({
        success: true,
        payload: {
          data: bookings,
          message: 'Bookings retrieved successfully according to user',
        },
      });
    } catch (e) {
      res.status(500).send({
        success: false,
        payload: {
          message:
            'There is some problem occured, Please try again after some time',
        },
      });
    }
  };
}

module.exports = new Booking();
