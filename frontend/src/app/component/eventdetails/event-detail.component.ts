import { Component, Input } from '@angular/core';

interface EventItem {
  id: number;
  title: string;
  category: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  image: string;
  price: number;
}

@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.component.html',
  styleUrls: ['./eventdetail.component.css']
})
export class EventDetailComponent {
  @Input() event: EventItem | null = null;

  seats: number = 1;

  incrementSeats() {
    this.seats++;
  }

  decrementSeats() {
    if(this.seats > 1) this.se

