const Bookings = require('../models/Booking');

class BookingDao {
  createBooking = async bookingObj => {
    await Bookings.create(bookingObj);
  };

  updateBooking = async updatedObj => {
    await Bookings.save(updatedObj);
  };

  getBookingsByUserId = async userId => Bookings.findAll({ userId });
}

module.exports = new BookingDao();
