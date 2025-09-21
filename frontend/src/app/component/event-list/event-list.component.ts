import { Component, OnInit } from '@angular/core';

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
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {
  events: EventItem[] = [];
  filteredEvents: EventItem[] = [];
  searchQuery = '';
  filterCategory = 'all';

  ngOnInit(): void {
    this.events = this.seedEvents();
    this.filteredEvents = this.events;
  }

  seedEvents(): EventItem[] {
    return [
      {
        id: 1,
        title: 'Arijit Singh Live',
        category: 'Concert',
        date: '2025-09-20',
        time: '7:30 PM',
        venue: 'Bangalore Palace',
        description: 'Musical evening with Arijit Singh.',
        image: 'https://picsum.photos/300/180?random=1',
        price: 1200
      },
      {
        id: 2,
        title: 'Sunburn Festival',
        category: 'EDM',
        date: '2025-09-25',
        time: '5:30 PM',
        venue: 'Goa Beach',
        description: 'Electronic dance festival.',
        image: 'https://picsum.photos/300/180?random=2',
        price: 1500
      },
      {
        id: 3,
        title: 'Comedy Night',
        category: 'Comedy',
        date: '2025-10-01',
        time: '8:00 PM',
        venue: 'Mumbai Theatre',
        description: 'Stand-up special by top comedians.',
        image: 'https://picsum.photos/300/180?random=3',
        price: 800
      },
      {
        id: 4,
        title: 'TEDx Bengaluru',
        category: 'Talks',
        date: '2025-10-05',
        time: '10:00 AM',
        venue: 'Bengaluru Convention Center',
        description: 'Ideas worth spreading.',
        image: 'https://picsum.photos/300/180?random=4',
        price: 500
      }
    ];
  }

  searchEvents() {
    const q = this.searchQuery.toLowerCase();
    this.filteredEvents = this.events.filter(e =>
      e.title.toLowerCase().includes(q) ||
      e.category.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q)
    );
  }

  filterByCategory(category: string) {
    this.filterCategory = category;
    if (category === 'all') {
      this.filteredEvents = this.events;
    } else {
      this.filteredEvents = this.events.filter(e => e.category.toLowerCase() === category.toLowerCase());
    }
  }

  bookEvent(event: EventItem) {
    alert(`Booking initiated for: ${event.title}`);
    // You can open BookingComponent here or navigate to booking page
  }
}
