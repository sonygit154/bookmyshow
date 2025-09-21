import { Router } from 'express';
import { bookings } from '../data';

const router = Router();

// Get all bookings
router.get('/', (req, res) => {
  res.json(bookings);
});

// Create a new booking
router.post('/', (req, res) => {
  const booking = req.body;
  if (!booking.userId || !booking.itemId || !booking.category || !booking.time || !booking.seats) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  booking.id = bookings.length + 1;
  booking.status = 'CONFIRMED';
  booking.createdAt = new Date();
  bookings.push(booking);
  res.status(201).json(booking);
});

// Cancel a booking
router.delete('/:id', (req, res) => {
  const index = bookings.findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Booking not found' });
  bookings[index].status = 'CANCELLED';
  bookings[index].cancelledAt = new Date();
  res.json(bookings[index]);
});

export default router;
