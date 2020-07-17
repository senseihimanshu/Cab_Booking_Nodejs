const Bookings = require('../models/Booking');

class BookingDao {
  createBooking = async bookingObj => {
    const newBooking = Bookings.build(bookingObj);
    await Bookings.save(newBooking);
  };

  updateBooking = async updatedObj => {
    await Bookings.save(updatedObj);
  };

  getBookingsByUserId = async userId => Bookings.findAll({ userId });
}

module.exports = new BookingDao();
