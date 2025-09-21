import { Movie } from './movie.model';

export const MOVIES: Movie[] = [
  {
    id: 1,
    title: 'Pathaan',
    lang: 'Hindi',
    genre: 'Action',
    desc: 'Spy thriller with high-octane action.',
    times: ['10:00 AM', '1:00 PM', '7:30 PM'],
    status: 'now-showing',
    img: 'https://upload.wikimedia.org/wikipedia/en/5/50/Pathaan_film_poster.jpg',
    price: 180
  },
  {
    id: 2,
    title: 'Avatar: The Way of Water',
    lang: 'English',
    genre: 'Sci-Fi',
    desc: 'Epic science fiction adventure.',
    times: ['12:00 PM', '4:00 PM', '9:00 PM'],
    status: 'now-showing',
    img: 'https://upload.wikimedia.org/wikipedia/en/8/80/Avatar_The_Way_of_Water_poster.jpg',
    price: 250
  },
  {
    id: 3,
    title: 'Kantara',
    lang: 'Kannada',
    genre: 'Drama',
    desc: 'Regional sensation with action and drama.',
    times: ['11:30 AM', '3:30 PM', '8:30 PM'],
    status: 'now-showing',
    img: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Kantara_film_poster.jpg',
    price: 150
  }
];
