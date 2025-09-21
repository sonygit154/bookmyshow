import { Component, OnInit, Input } from '@angular/core';

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

interface Seat {
  id: number;
  row: string;
  number: number;
  booked: boolean;
}

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie!: Movie;

  seats: Seat[] = [];
  selectedSeats: Seat[] = [];
  selectedTime: string = '';

  ngOnInit(): void {
    this.generateSeats();
  }

  generateSeats() {
    const rows = 'ABCDEFGHIJKLMNO'; // 15 rows
    let idCounter = 1;
    this.seats = [];
    for (const row of rows) {
      for (let n = 1; n <= 16; n++) { // 16 seats per row → 240 seats total
        this.seats.push({ id: idCounter++, row, number: n, booked: false });
      }
    }
  }

  toggleSeat(seat: Seat) {
    if (seat.booked) return;
    const idx = this.selectedSeats.indexOf(seat);
    if (idx > -1) {
      this.selectedSeats.splice(idx, 1);
    } else {
      this.selectedSeats.push(seat);
    }
  }

  proceedBooking() {
    if (!this.selectedTime) {
      alert('Select a showtime first!');
      return;
    }
    if (this.selectedSeats.length === 0) {
      alert('Select at least one seat!');
      return;
    }
    // Simulate booking
    this.selectedSeats.forEach(s => s.booked = true);
    alert(`Booking confirmed for ${this.movie.title} at ${this.selectedTime}.\nSeats: ${this.selectedSeats.map(s => s.row + s.number).join(', ')}`);
    this.selectedSeats = [];
    this.selectedTime = '';
  }
}

