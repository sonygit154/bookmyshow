import { Movie } from './models/movie.model';
import { Event } from './models/event.model';
import { Booking } from './models/booking.model';
import { User } from './models/user.model';

// In-memory database (for demo purposes)
// src/data.ts

export interface Movie {
  id: number;
  title: string;
  lang: string;
  genre: string;
  description?: string;
  showTimes: string[];
  status: 'now-showing' | 'coming-soon';
  seats: number; // total seats per show
  img?: string;
}

export interface Event {
  id: number;
  title: string;
  type: string;
  description?: string;
  showTimes: string[];
  status: 'now-showing' | 'coming-soon';
  seats: number;
  img?: string;
}

export interface Booking {
  id: number;
  userId: number;
  itemId: number; // movie or event id
  category: 'movies' | 'events';
  time: string;
  seats: number;
  amount: number;
  status: 'CONFIRMED' | 'CANCELLED';
  createdAt: Date;
  cancelledAt?: Date;
  paymentMethod?: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string; // hashed or plain for demo
}

// ------------------ Sample Users ------------------
export const users: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", password: "123456" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", password: "abcdef" },
];

// ------------------ Sample Movies ------------------
export const movies: Movie[] = [
  {
    id: 1,
    title: "Pathaan",
    lang: "Hindi",
    genre: "Action",
    description: "Spy thriller with high-octane action.",
    showTimes: ["10:00 AM", "1:00 PM", "7:30 PM"],
    status: "now-showing",
    seats: 250,
    img: "https://upload.wikimedia.org/wikipedia/en/8/87/Pathaan_film_poster.jpg"
  },
  {
    id: 2,
    title: "Avatar: The Way of Water",
    lang: "English",
    genre: "Sci-Fi",
    description: "Epic science fiction adventure.",
    showTimes: ["12:00 PM", "4:00 PM", "9:00 PM"],
    status: "now-showing",
    seats: 250,
    img: "https://upload.wikimedia.org/wikipedia/en/9/9e/Avatar_-_The_Way_of_Water.png"
  },
  {
    id: 3,
    title: "Kantara",
    lang: "Kannada",
    genre: "Drama",
    description: "Regional sensation with breathtaking visuals.",
    showTimes: ["11:30 AM", "3:30 PM", "8:30 PM"],
    status: "now-showing",
    seats: 250,
    img: "https://upload.wikimedia.org/wikipedia/en/1/1e/Kantara_Poster.jpg"
  },
  {
    id: 4,
    title: "RRR",
    lang: "Telugu",
    genre: "Action",
    description: "Epic period action drama.",
    showTimes: ["10:30 AM", "2:30 PM", "7:00 PM"],
    status: "now-showing",
    seats: 250,
    img: "https://upload.wikimedia.org/wikipedia/en/f/f9/RRR_film_poster.jpg"
  },
  {
    id: 5,
    title: "Oppenheimer",
    lang: "English",
    genre: "Drama",
    description: "Biopic of J. Robert Oppenheimer.",
    showTimes: ["1:00 PM", "5:00 PM"],
    status: "coming-soon",
    seats: 250,
    img: "https://upload.wikimedia.org/wikipedia/en/0/06/Oppenheimer_film_poster.jpg"
  },
  {
    id: 6,
    title: "KGF Chapter 2",
    lang: "Kannada",
    genre: "Thriller",
    description: "High-octane thriller sequel.",
    showTimes: ["12:30 PM", "6:30 PM"],
    status: "now-showing",
    seats: 250,
    img: "https://upload.wikimedia.org/wikipedia/en/5/57/KGF_Chapter_2_poster.jpg"
  }
];

// ------------------ Sample Events ------------------
export const events: Event[] = [
  {
    id: 1,
    title: "Arijit Singh Live",
    type: "Concert",
    description: "Musical evening with Arijit Singh.",
    showTimes: ["7:30 PM"],
    status: "now-showing",
    seats: 200,
    img: "https://upload.wikimedia.org/wikipedia/en/3/37/Arijit_Singh_Concert.jpg"
  },
  {
    id: 2,
    title: "Sunburn Festival",
    type: "EDM",
    description: "Electronic dance festival.",
    showTimes: ["5:30 PM"],
    status: "coming-soon",
    seats: 300,
    img: "https://upload.wikimedia.org/wikipedia/en/4/44/Sunburn_Festival.jpg"
  },
  {
    id: 3,
    title: "Comedy Night",
    type: "Comedy",
    description: "Stand-up comedy special.",
    showTimes: ["8:00 PM"],
    status: "now-showing",
    seats: 150,
    img: "https://upload.wikimedia.org/wikipedia/en/1/19/Comedy_Night.jpg"
  },
  {
    id: 4,
    title: "TEDx Bengaluru",
    type: "Talks",
    description: "Ideas worth spreading.",
    showTimes: ["10:00 AM"],
    status: "coming-soon",
    seats: 100,
    img: "https://upload.wikimedia.org/wikipedia/en/9/90/TEDxBengaluru.jpg"
  }
];

// ------------------ Sample Bookings ------------------
export const bookings: Booking[] = [
  {
    id: 1,
    userId: 1,
    itemId: 1,
    category: "movies",
    time: "10:00 AM",
    seats: 2,
    amount: 180 * 2,
    status: "CONFIRMED",
    createdAt: new Date("2025-09-07T10:00:00")
  },
  {
    id: 2,
    userId: 2,
    itemId: 2,
    category: "movies",
    time: "4:00 PM",
    seats: 3,
    amount: 180 * 3,
    status: "CONFIRMED",
    createdAt: new Date("2025-09-06T15:30:00")
  }
];
