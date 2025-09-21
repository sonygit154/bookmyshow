import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie-controller',
  templateUrl: './movie.controller.html',
  styleUrls: ['./movie.controller.css']
})
export class MovieControllerComponent implements OnInit {

  movies: Movie[] = [];
  newMovie: Partial<Movie> = {};
  editingMovieId: number | null = null;

  constructor() { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    const stored = localStorage.getItem('movies');
    this.movies = stored ? JSON.parse(stored) : [];
  }

  saveMovies() {
    localStorage.setItem('movies', JSON.stringify(this.movies));
  }

  addMovie() {
    if (!this.newMovie.title || !this.newMovie.genre || !this.newMovie.times) {
      alert('Please fill required fields');
      return;
    }
    const id = this.movies.length > 0 ? Math.max(...this.movies.map(m => m.id)) + 1 : 1;
    this.movies.push({
      id,
      title: this.newMovie.title,
      genre: this.newMovie.genre,
      lang: this.newMovie.lang || 'English',
      desc: this.newMovie.desc || '
