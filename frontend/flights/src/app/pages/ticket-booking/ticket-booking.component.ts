import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-ticket-booking',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent implements OnInit {
  flightId: string | null = null;
  returnFlightId: string | null = null;
  passengers: number = 1;
  classType: string = 'ECONOMY';

  priceAndata: number | null = null;
  priceRitorno: number | null = null;
  totalPrice: number | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.flightId = this.route.snapshot.queryParamMap.get('flightId');
    this.returnFlightId = this.route.snapshot.queryParamMap.get('returnFlightId');
    this.passengers = Number(this.route.snapshot.queryParamMap.get('passengers')) || 1;
    this.classType = this.route.snapshot.queryParamMap.get('classType') || 'ECONOMY';

    if (this.flightId) {
      this.fetchPrice(this.flightId, 'andata');
    }
    if (this.returnFlightId) {
      this.fetchPrice(this.returnFlightId, 'ritorno');
    }
  }

  fetchPrice(flightUUID: string, type: 'andata' | 'ritorno') {
    this.http.get<any[]>(`/api/bookings/tickets/${flightUUID}?type=${this.classType}`).subscribe(res => {
      const found = res.find(t => (t.type || '').toUpperCase() === this.classType.toUpperCase());
      if (found && found.price) {
        if (type === 'andata') this.priceAndata = found.price;
        if (type === 'ritorno') this.priceRitorno = found.price;
      }
      this.calculateTotal();
    });
  }

  calculateTotal() {
    let total = 0;
    if (this.priceAndata) total += this.priceAndata;
    if (this.priceRitorno) total += this.priceRitorno;
    this.totalPrice = total * this.passengers;
  }
}
