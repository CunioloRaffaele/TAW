import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [MatCardModule, MatIcon, CommonModule, RouterModule, MatButtonModule],
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit {
  @Input() flight: any;
  priceAndata: number | null = null;
  priceRitorno: number | null = null;
  loadingPrice = false;
  errorPrice: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (this.isRoundTrip()) {
      this.priceAndata = null;
      this.priceRitorno = null;
      this.loadingPrice = true;
      this.errorPrice = null;
      Promise.all([
        this.fetchPricePromise(this.flight[0].code),
        this.fetchPricePromise(this.flight[1].code)
      ]).then(([priceAndata, priceRitorno]) => {
        this.priceAndata = priceAndata;
        this.priceRitorno = priceRitorno;
        this.loadingPrice = false;
      }).catch(() => {
        this.priceAndata = null;
        this.priceRitorno = null;
        this.errorPrice = 'Errore prezzo';
        this.loadingPrice = false;
      });
    } else if (this.flight?.code) {
      this.fetchPrice(this.flight.code);
    }
  }

  fetchPrice(flightUUID: string) {
    this.loadingPrice = true;
    this.http.get<any>(`${environment.apiUrl}/api/bookings/tickets/${flightUUID}`).subscribe({
      next: (res) => {
        // Adatta questa parte in base alla struttura della risposta!
        // Esempio: res.tickets[0].price
        if (Array.isArray(res) && res.length > 0 && res[0].price) {
          this.priceAndata = res[0].price;
        } else if (res.tickets && res.tickets.length > 0 && res.tickets[0].price) {
          this.priceAndata = res.tickets[0].price;
        } else {
          this.priceAndata = null;
        }
        this.loadingPrice = false;
      },
      error: () => {
        this.errorPrice = 'Errore prezzo';
        this.loadingPrice = false;
      }
    });
  }

  fetchPricePromise(flightUUID: string): Promise<number | null> {
    return this.http.get<any>(`${environment.apiUrl}/api/bookings/tickets/${flightUUID}`)
      .toPromise()
      .then(res => {
        if (Array.isArray(res) && res.length > 0 && res[0].price) {
          return res[0].price;
        } else if (res.tickets && res.tickets.length > 0 && res.tickets[0].price) {
          return res.tickets[0].price;
        } else {
          return null;
        }
      })
      .catch(() => null);
  }

  getLandingDateLocal(flight: any): Date | null {
    if (!flight.liftoff_date_LOCAL || !flight.duration) return null;
    const liftoff = new Date(flight.liftoff_date_LOCAL);
    return new Date(liftoff.getTime() + flight.duration * 60000);
  }

  isRoundTrip(): boolean {
    // true solo se flight è un array di 2 voli e rappresenta andata+ritorno
    return Array.isArray(this.flight) &&
           this.flight.length === 2 &&
           this.flight[0].routes.airports_routes_departureToairports.id === this.flight[1].routes.airports_routes_destinationToairports.id &&
           this.flight[0].routes.airports_routes_destinationToairports.id === this.flight[1].routes.airports_routes_departureToairports.id;
  }

  isMultiLeg(): boolean {
    // true se flight è un array di almeno 2 voli e NON è roundtrip
    return Array.isArray(this.flight) &&
           this.flight.length > 1 &&
           !this.isRoundTrip();
  }

  getMultiLegTotalMinutes(flight: any[]): number {
    return flight.reduce((acc, leg) => acc + (leg.duration || 0), 0);
  }

  getMultiLegDurationString(flight: any[]): string {
    const total = flight.reduce((acc, leg) => acc + (leg.duration || 0), 0);
    const hours = Math.floor(total / 60);
    const minutes = total % 60;
    return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`;
  }

  isCustomer(): boolean {
    const token = localStorage.getItem('jwt_token');
    if (!token) return false;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.role === 0; 
    } catch {
      return false;
    }
  }
}
