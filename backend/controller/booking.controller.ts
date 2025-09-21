import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-controllers',
  templateUrl: './controllers.component.html',
  styleUrls: ['./controllers.component.css']
})
export class ControllersComponent implements OnInit {

  movies: Movie[] = [];
  events: Event[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadMovies();
    this.loadEvents();
  }

  loadMovies() {
    // For demo, use localStorage or mock data
    const storedMovies = localStorage.getI
