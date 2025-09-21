import { Router } from 'express';
import { events } from '../data';

const router = Router();

// Get all events
router.get('/', (req, res) => {
  res.json(events);
});

// Get a single event by ID
router.get('/:id', (req, res) => {
  const event = events.find(e => e.id === parseInt(req.params.id));
  if (!event) return res.status(404).json({ message: 'Event not found' });
  res.json(event);
});

export default router;

