import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Movie {
  id: number;
  title: string;
  lang: string;
  genre: string;
  desc: string;
  times: string[];
  status: 'now-showing' | 'coming-soon';
  img: string;
}

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    // Hardcoded movie data; ideally fetched from a service
    this.movies = [
      { id: 1, title: 'Pathaan', lang: 'Hindi', genre: 'Action', desc: 'Spy thriller', times: ['10:00 AM','1:00 PM','7:30 PM'], status: 'now-showing', img: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Pathaan_film_poster.jpg' },
      { id: 2, title: 'Avatar: The Way of Water', lang: 'English', genre: 'Sci-Fi', desc: 'Epic science fiction', times: ['12:00 PM','4:00 PM','9:00 PM'], status: 'now-showing', img: 'https://upload.wikimedia.org/wikipedia/en/8/88/Avatar_The_Way_of_Water_poster.jpg' },
      { id: 3, title: 'Kantara', lang: 'Kannada', genre: 'Drama', desc: 'Regional sensation', times: ['11:30 AM','3:30 PM','8:30 PM'], status: 'now-showing', img: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Kantara_film.jpg' },
      { id: 4, title: 'RRR', lang: 'Telugu', genre: 'Action', desc: 'Epic period action', times: ['10:30 AM','2:30 PM','7:00 PM'], status: 'now-showing', img: 'https://upload.wikimedia.org/wikipedia/en/f/f1/RRR_film_poster.jpg' },
      { id: 5, title: 'Oppenheimer', lang: 'English', genre: 'Drama', desc: 'Biopic of Oppenheimer', times: ['1:00 PM','5:00 PM'], status: 'coming-soon', img: 'https://upload.wikimedia.org/wikipedia/en/8/86/Oppenheimer_film_poster.jpg' },
      { id: 6, title: 'KGF Chapter 2', lang: 'Kannada', genre: 'Thriller', desc: 'High-octane thriller', times: ['12:30 PM','6:30 PM'], status: 'now-showing', img: 'https://upload.wikimedia.org/wikipedia/en/9/9e/KGF_Chapter_2.jpg' },
    ];
  }

  viewDetails(movie: Movie) {
    this.router.navigate(['/movie', movie.id]); // Navigate to movie-detail component
  }
}
