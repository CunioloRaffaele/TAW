import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css'],
})
export class TripCardComponent {
  @Input() trip: any;
  bookings: any[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit() {
    // Copia bookings per poter aggiungere i nomi
    this.bookings = this.trip?.bookings ? [...this.trip.bookings] : [];
    this.bookings.forEach((booking, i) => {
      const flight = booking?.tickets?.flights;
      if (flight) {
        // Fetch partenza
        this.http
          .get<any>(
            `${environment.apiUrl}/api/navigate/airports/${flight.route_departure}`
          )
          .subscribe({
            next: (res) => {
              this.bookings[i].departureAirportName = res.airport?.name || '';
            },
          });
        // Fetch arrivo
        this.http
          .get<any>(
            `${environment.apiUrl}/api/navigate/airports/${flight.route_destination}`
          )
          .subscribe({
            next: (res) => {
              this.bookings[i].destinationAirportName = res.airport?.name || '';
            },
          });
      }
    });
  }

  downloadBooking(bookingId: number) {
    const token = localStorage.getItem('jwt_token');
    this.http
      .get(`${environment.apiUrl}/api/bookings/booking/${bookingId}/download`, {
        headers: { Authorization: `Bearer ${token}` },
        responseType: 'blob',
      })
      .subscribe((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `booking_${bookingId}.pdf`;
        a.click();
        window.URL.revokeObjectURL(url);
      });
  }
}
