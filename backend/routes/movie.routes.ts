import { Router } from 'express';
import { movies } from '../data';

const router = Router();

// Get all movies
router.get('/', (req, res) => {
  res.json(movies);
});

// Get a single movie by ID
router.get('/:id', (req, res) => {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).json({ message: 'Movie not found' });
  res.json(movie);
});

export default router;
