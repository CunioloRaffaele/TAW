import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [MatCardModule, MatIcon, CommonModule, RouterModule, MatButtonModule],
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit, OnChanges {
  @Input() flight: any;
  @Input() set classType(value: string) {
    this._classType = (value || 'ECONOMY').toUpperCase();
    console.log('[FlightCard] classType set:', this._classType);
  }
  get classType(): string {
    return this._classType;
  }
  private _classType: string = 'ECONOMY'; // Imposta un valore predefinito per classType
  @Input() set passengers(value: number) {
    this._passengers = value;
    console.log('[FlightCard] passengers set:', value, '(typeof:', typeof value, ')');
  }
  get passengers(): number {
    return this._passengers;
  }
  private _passengers: number = 1;
  priceAndata: number | null = null;
  priceRitorno: number | null = null;
  loadingPrice = false;
  errorPrice: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchAllPrices();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['classType'] && !changes['classType'].firstChange) {
      console.log('[FlightCard] ngOnChanges classType:', this.classType);
      this.fetchAllPrices();
    }
  }

  fetchAllPrices() {
    console.log('[FlightCard] fetchAllPrices, classType:', this.classType, 'flight:', this.flight);
    this.errorPrice = null;
    this.loadingPrice = true;
    // Roundtrip
    if (this.isRoundTrip()) {
      this.priceAndata = null;
      this.priceRitorno = null;
      Promise.all([
        this.fetchPricePromise(this.flight[0].code, this.classType),
        this.fetchPricePromise(this.flight[1].code, this.classType)
      ]).then(([priceAndata, priceRitorno]) => {
        this.priceAndata = priceAndata;
        this.priceRitorno = priceRitorno;
        console.log('[FlightCard] roundtrip prices:', priceAndata, priceRitorno);
        this.loadingPrice = false;
      }).catch(() => {
        this.priceAndata = null;
        this.priceRitorno = null;
        this.errorPrice = 'Errore prezzo';
        this.loadingPrice = false;
      });
      return;
    }
    // Multi-leg
    if (this.isMultiLeg()) {
      for (const leg of this.flight) {
        leg.price = null;
      }
      Promise.all(
        this.flight.map((leg: any) =>
          this.fetchPricePromise(leg.code, this.classType).then(price => {
            leg.price = price;
            console.log('[FlightCard] multi-leg leg.code:', leg.code, 'classType:', this.classType, 'price:', price);
            return price;
          })
        )
      ).then(() => {
        this.loadingPrice = false;
      }).catch(() => {
        this.errorPrice = 'Errore prezzo';
        this.loadingPrice = false;
      });
      return;
    }
    // Single leg
    if (this.flight?.code) {
      this.priceAndata = null;
      this.fetchPrice(this.flight.code, this.classType);
      return;
    }
    this.loadingPrice = false;
  }

  fetchPrice(flightUUID: string, classType: string) {
    this.loadingPrice = true;
    console.log('[FlightCard] fetchPrice', flightUUID, 'classType:', classType);
    this.http.get<any>(`${environment.apiUrl}/api/bookings/tickets/${flightUUID}?type=${classType}`).subscribe({
      next: (res) => {
        let prezzo = null;
        if (Array.isArray(res)) {
          const found = res.find((t: any) => (t.type || '').toUpperCase() === classType.toUpperCase());
          if (found && found.price) {
            prezzo = found.price;
            this.priceAndata = prezzo;
          } else {
            this.priceAndata = null;
          }
        } else if (res.tickets && Array.isArray(res.tickets)) {
          const found = res.tickets.find((t: any) => (t.type || '').toUpperCase() === classType.toUpperCase());
          if (found && found.price) {
            prezzo = found.price;
            this.priceAndata = prezzo;
          } else {
            this.priceAndata = null;
          }
        } else {
          this.priceAndata = null;
        }
        console.log('[FlightCard] fetchPrice result', flightUUID, 'classType:', classType, 'price:', prezzo);
        this.loadingPrice = false;
      },
      error: () => {
        this.errorPrice = 'Errore prezzo';
        this.loadingPrice = false;
      }
    });
  }

  fetchPricePromise(flightUUID: string, classType: string): Promise<number | null> {
    console.log('[FlightCard] fetchPricePromise', flightUUID, 'classType:', classType);
    return this.http.get<any>(`${environment.apiUrl}/api/bookings/tickets/${flightUUID}?type=${classType}`)
      .toPromise()
      .then(res => {
        let prezzo = null;
        if (Array.isArray(res)) {
          const found = res.find((t: any) => (t.type || '').toUpperCase() === classType.toUpperCase());
          if (found && found.price) {
            prezzo = found.price;
          }
        } else if (res.tickets && Array.isArray(res.tickets)) {
          const found = res.tickets.find((t: any) => (t.type || '').toUpperCase() === classType.toUpperCase());
          if (found && found.price) {
            prezzo = found.price;
          }
        }
        console.log('[FlightCard] fetchPricePromise result', flightUUID, 'classType:', classType, 'price:', prezzo);
        return prezzo;
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

  getMultiLegTotalPrice(): number | null {
    if (!Array.isArray(this.flight)) return null;
    let total = 0;
    for (const leg of this.flight) {
      if (leg.price == null) return null;
      total += leg.price;
    }
    return total;
  }

  goToBooking() {
    console.log('[FlightCard] goToBooking passengers:', this.passengers, '(typeof:', typeof this.passengers, ')');
    this.router.navigate(['/ticket-booking'], {
      state: {
        flightId: this.isRoundTrip() ? this.flight[0].code : this.flight.code,
        returnFlightId: this.isRoundTrip() ? this.flight[1].code : null,
        passengers: this.passengers,
        classType: this.classType,
        // puoi aggiungere anche il prezzo se vuoi
      }
    });
  }
}
