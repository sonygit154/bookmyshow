import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({ providedIn: 'root' })
export class EventService {
  private api = 'http://localhost:5000/api/events';
  constructor(private http: HttpClient) {}
  getAll(): Observable<Event[]> { return this.http.get<Event[]>(this.api); }
  getById(id: string) { return this.http.get<Event>(${this.api}/${id}); }
}