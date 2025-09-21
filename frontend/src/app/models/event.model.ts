import { Event } from './event.model';

export const EVENTS: Event[] = [
  {
    id: 1,
    title: 'Arijit Singh Live',
    category: 'Concert',
    desc: 'Musical evening by Arijit Singh',
    venue: 'Bengaluru Indoor Stadium',
    date: '2025-09-20',
    times: ['6:00 PM', '9:00 PM'],
    status: 'upcoming',
    img: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Arijit_Singh_Live.jpg',
    price: 1200
  },
  {
    id: 2,
    title: 'Comedy Night',
    category: 'Comedy',
    desc: 'Stand-up special by top comedians',
    venue: 'Mumbai Comedy Club',
    date: '2025-09-25',
    times: ['7:30 PM'],
    status: 'upcoming',
    img: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Comedy_event.jpg',
    price: 800
  }
];
