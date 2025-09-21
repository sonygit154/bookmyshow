import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface ShowItem {
  id: number;
  title: string;
  category: string;
  times: string[];
  price: number;
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  @Input() item!: ShowItem;
  bookingForm: FormGroup;
  submitted = false;
  paymentSuccess = false;
  selectedTime: string | null = null;

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      seats: [1, [Validators.required, Validators.min(1)]],
      paymentMethod: ['CARD', Validators.required]
    });
  }

  get f() { return this.bookingForm.controls; }

  selectTime(time: string) {
    this.selectedTime = time;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.selectedTime) return alert('Please select a showtime');
    if (this.bookingForm.invalid) return;

    const booking = {
      title: this.item.title,
      category: this.item.category,
      time: this.selectedTime,
      seats: this.bookingForm.value.seats,
      paymentMethod: this.bookingForm.value.paymentMethod,
      amount: this.item.price * this.bookingForm.value.seats
    };

    // Simulate payment success
    console.log('Booking:', booking);
    this.paymentSuccess = true;
  }

  resetBooking() {
    this.bookingForm.reset({ seats: 1, paymentMethod: 'CARD' });
    this.selectedTime = null;
    this.submitted = false;
    this.paymentSuccess = false;
  }
}
