import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class BookingService {
  private api = 'http://localhost:5000/api/bookings';
  constructor(private http: HttpClient) {}
  create(payload: any) { return this.http.post(this.api, payload); }
}