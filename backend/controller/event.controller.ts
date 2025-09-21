import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-event-controller',
  templateUrl: './event.controller.html',
  styleUrls: ['./event.controller.css']
})
export class EventControllerComponent implements OnInit {

  events: Event[] = [];
  newEvent: Partial<Event> = {};
  editingEventId: number | null = null;

  constructor() { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents() {
    const storedEvents = loca
