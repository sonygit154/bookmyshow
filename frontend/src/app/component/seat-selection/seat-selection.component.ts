import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

interface Seat {
  id: number;
  row: number;
  number: number;
  status: 'available' | 'booked' | 'selected';
}

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css']
})
export class SeatSelectionComponent implements OnInit {

  @Input() rows: number = 10;      // Number of rows
  @Input() seatsPerRow: number = 20; // Seats per row
  @Input() bookedSeats: number[] = []; // Already booked seat IDs
  @Output() selectionChange = new EventEmitter<number[]>(); // Emit selected seat IDs

  seats: Seat[] = [];
  selectedSeatIds: number[] = [];

  ngOnInit(): void {
    this.generateSeats();
  }

  generateSeats() {
    let idCounter = 1;
    this.seats = [];
    for (let r = 1; r <= this.rows; r++) {
      for (let s = 1; s <= this.seatsPerRow; s++) {
        const status: 'available' | 'booked' = this.bookedSeats.includes(idCounter) ? 'booked' : 'available';
        this.seats.push({ id: idCounter, row: r, number: s, status: status as any });
        idCounter++;
      }
    }
  }

  toggleSeat(seat: Seat) {
    if (seat.status === 'booked') return; // cannot select booked
    if (seat.status === 'selected') {
      seat.status = 'available';
      this.selectedSeatIds = this.selectedSeatIds.filter(id => id !== seat.id);
    } else {
      seat.status = 'selected';
      this.selectedSeatIds.push(seat.id);
    }
    this.selectionChange.emit(this.selectedSeatIds);
  }

  getSeatsByRow(row: number) {
    return this.seats.filter(seat => seat.row === row);
  }
}
