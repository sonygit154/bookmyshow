import { Component, OnInit } from '@angular/core';

interface Item {
  id: number;
  title: string;
  category: string;
  lang?: string;
  genre?: string;
  desc?: string;
  times?: string[];
  img: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories = ['movies', 'plays', 'sports', 'events', 'cinemas'];
  items: { [key: string]: Item[] } = {};
  searchQuery = '';

  constructor() {}

  ngOnInit(): void {
    this.items = this.seedItems();
  }

  seedItems() {
    return {
      movies: [
        { id: 1, title: 'Pathaan', category: 'movies', lang:
