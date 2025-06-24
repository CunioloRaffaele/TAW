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
  
  @Input() andataSegments: any[] = [];
  @Input() ritornoSegments: any[] = [];
  @Input() set classType(value: string) {
    const newClass = (value || 'ECONOMY').toUpperCase();
    if (this._classType !== newClass) {
      this._classType = newClass;
      this.fetchAllPrices();
    }
  }
  get classType(): string {
    return this._classType;
  }
  private _classType: string = 'ECONOMY';
  @Input() set passengers(value: number) {
    if (this._passengers !== value) {
      this._passengers = value;
      this.fetchAllPrices();
    }
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
    if (
      (changes['classType'] && !changes['classType'].firstChange) ||
      (changes['passengers'] && !changes['passengers'].firstChange) ||
      changes['andataSegments'] || changes['ritornoSegments']
    ) {
      this.fetchAllPrices();
    }
  }

  fetchAllPrices() {
    console.log('[FlightCard] fetchAllPrices - classType:', this.classType, 'passengers:', this.passengers, 'andataSegments:', this.andataSegments, 'ritornoSegments:', this.ritornoSegments);
    this.errorPrice = null;
    this.loadingPrice = true;
    // Roundtrip (anche multi-leg)
    if (this.isRoundTrip()) {
      // Caso roundtrip single leg (1 segmento per tratta)
      if (this.andataSegments.length === 1 && this.ritornoSegments.length === 1) {
        this.priceAndata = null;
        this.priceRitorno = null;
        Promise.all([
          this.fetchPricePromise(this.andataSegments[0].code, this.classType),
          this.fetchPricePromise(this.ritornoSegments[0].code, this.classType)
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
        return;
      }
      // Caso roundtrip multi-leg (almeno un segmento multiplo)
      for (const leg of this.andataSegments) leg.price = null;
      for (const leg of this.ritornoSegments) leg.price = null;
      const andataPromises = this.andataSegments.map((leg: any) =>
        this.fetchPricePromise(leg.code, this.classType).then(price => {
          leg.price = price;
          return price;
        })
      );
      const ritornoPromises = this.ritornoSegments.map((leg: any) =>
        this.fetchPricePromise(leg.code, this.classType).then(price => {
          leg.price = price;
          return price;
        })
      );
      Promise.all([
        Promise.all(andataPromises),
        Promise.all(ritornoPromises)
      ]).then(([andataPrices, ritornoPrices]) => {
        this.priceAndata = this.getSegmentsTotalPrice(this.andataSegments);
        this.priceRitorno = this.getSegmentsTotalPrice(this.ritornoSegments);
        this.loadingPrice = false;
      }).catch(() => {
        this.priceAndata = null;
        this.priceRitorno = null;
        this.errorPrice = 'Errore prezzo';
        this.loadingPrice = false;
      });
      return;
    }
    // Multi-leg (solo andata)
    if (this.isMultiLeg()) {
      for (const leg of this.andataSegments) {
        leg.price = null;
      }
      Promise.all(
        this.andataSegments.map((leg: any) =>
          this.fetchPricePromise(leg.code, this.classType).then(price => {
            leg.price = price;
            return price;
          })
        )
      ).then((prices) => {
        console.log('[FlightCard] Prezzi multi-leg:', prices);
        this.loadingPrice = false;
      }).catch(() => {
        this.errorPrice = 'Errore prezzo';
        this.loadingPrice = false;
      });
      return;
    }
    // Single leg
    if (this.andataSegments?.[0]?.code) {
      this.priceAndata = null;
      this.fetchPrice(this.andataSegments[0].code, this.classType);
      return;
    }
    this.loadingPrice = false;
  }

  fetchPrice(flightUUID: string, classType: string) {
    this.loadingPrice = true;
    this.http.get<any>(`${environment.apiUrl}/api/bookings/tickets/${flightUUID}`).subscribe({
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
        this.loadingPrice = false;
      },
      error: () => {
        this.errorPrice = 'Errore prezzo';
        this.loadingPrice = false;
      }
    });
  }

  fetchPricePromise(flightUUID: string, classType: string): Promise<number | null> {
    return this.http.get<any>(`${environment.apiUrl}/api/bookings/tickets/${flightUUID}`)
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
    return Array.isArray(this.andataSegments) && Array.isArray(this.ritornoSegments) &&
           this.andataSegments.length > 0 && this.ritornoSegments.length > 0;
  }

  isMultiLeg(): boolean {
    return Array.isArray(this.andataSegments) && this.andataSegments.length > 1 && !this.isRoundTrip();
  }

  getMultiLegTotalMinutes(): number {
    return this.andataSegments.reduce((acc, leg) => acc + (leg.duration || 0), 0);
  }

  getMultiLegDurationString(): string {
    const total = this.getMultiLegTotalMinutes();
    const hours = Math.floor(total / 60);
    const minutes = total % 60;
    return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`;
  }

  getMultiLegTotalPrice(): number | null {
    if (!Array.isArray(this.andataSegments)) return null;
    let total = 0;
    for (const leg of this.andataSegments) {
      if (leg.price == null) return null;
      total += leg.price;
    }
    return total;
  }

  
  //Calcola il prezzo totale per roundtrip multi-leg (somma tutti i segmenti di andata e ritorno)
  getRoundTripMultiLegTotalPrice(): number | null {
    const andata = this.getAndataTotalPrice();
    const ritorno = this.getRitornoTotalPrice();
    if (andata === null || ritorno === null) {
      return null;
    }
    const total = andata + ritorno;
    return total;
  }

  
  //Calcola il prezzo totale di una lista di segmenti (multi-leg o single-leg)
  //Non logga warning se loadingPrice è true (evita spam in fase di fetch)
  private getSegmentsTotalPrice(segments: any[]): number | null {
    if (!Array.isArray(segments)) return null;
    let total = 0;
    for (const leg of segments) {
      if (leg.price == null) {
        return null;
      }
      total += leg.price;
    }
    return total;
  }

  //Somma i prezzi di tutti i segmenti di andata (multi-leg o single-leg)
  getAndataTotalPrice(): number | null {
    const total = this.getSegmentsTotalPrice(this.andataSegments);
    return total;
  }

  //Somma i prezzi di tutti i segmenti di ritorno (multi-leg o single-leg)
  getRitornoTotalPrice(): number | null {
    const total = this.getSegmentsTotalPrice(this.ritornoSegments);
    return total;
  }

  getAndataDeparture() {
    return this.andataSegments[0]?.routes?.airports_routes_departureToairports;
  }
  getAndataArrival() {
    return this.andataSegments[this.andataSegments.length - 1]?.routes?.airports_routes_destinationToairports;
  }
  getRitornoDeparture() {
    return this.ritornoSegments?.[0]?.routes?.airports_routes_departureToairports;
  }
  getRitornoArrival() {
    return this.ritornoSegments?.[this.ritornoSegments.length - 1]?.routes?.airports_routes_destinationToairports;
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

  goToBooking() {
    let totalPrice = null;
    if (this.isRoundTrip()) {
      if (this.priceAndata != null && this.priceRitorno != null) {
        totalPrice = (this.priceAndata + this.priceRitorno) * this.passengers;
      }
    } else if (this.isMultiLeg()) {
      const multiLegTotal = this.getMultiLegTotalPrice();
      if (multiLegTotal != null) {
        totalPrice = multiLegTotal * this.passengers;
      }
    } else {
      if (this.priceAndata != null) {
        totalPrice = this.priceAndata * this.passengers;
      }
    }
    this.router.navigate(['/ticket-booking'], {
      state: {
        flightId: this.andataSegments[0]?.code,
        returnFlightId: this.ritornoSegments?.[0]?.code || null,
        passengers: this.passengers,
        classType: this.classType,
        totalPrice: totalPrice
      }
    });
  }
}
