import { Component, input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-airline-flight-card',
  standalone: true,
  imports: [MatCardModule, MatIcon],
  templateUrl: './airline-flight-card.component.html',
  styleUrls: ['./airline-flight-card.component.css']
})
export class AirlineFlightCardComponent {
  flight = input<any>();
  @Output() deleted = new EventEmitter<string>();

  constructor(private http: HttpClient) {}

  onDeleteFlight() {
    const flightUUID = this.flight()?.code;
    if (!flightUUID) return;
    const token = localStorage.getItem('postmessages_token');
    this.http.delete(`${environment.apiUrl}/api/navigate/flights/${flightUUID}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    }).subscribe({
      next: () => this.deleted.emit(flightUUID)
    });
  }
}