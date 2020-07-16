import Bookings from '../models/Booking';

export const createBooking = async bookingObj => {
  const newBooking = Bookings.build(bookingObj);
  await Bookings.save(newBooking);
};

export const updateBooking = async updatedObj => {
  await Bookings.save(updatedObj);
};

export const getBookingsByUserId = async userId => Bookings.findAll({ userId });
