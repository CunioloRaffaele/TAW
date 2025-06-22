import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { environment } from '../../../../environments/environment';
import { AirlineFlightCardComponent } from '../../../components/airline-flight-card/airline-flight-card.component';

@Component({
  selector: 'app-flights-management',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    AirlineFlightCardComponent],
  templateUrl: './flights-management.component.html',
  styleUrls: ['./flights-management.component.css']
})
export class FlightsManagementComponent implements OnInit {
  flights: any[] = [];
showAddFlight = false; 
  flightForm: FormGroup;
  aircrafts: any[] = [];
  filteredFromAirports: any[] = [];
  filteredToAirports: any[] = [];
  filteredStopoverAirports: any[][] = [];
  loading = false;
  error: string | null = null;
  success = false;
  departureTime: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.flightForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      stopovers: this.fb.array([]),
      departureDate: ['', Validators.required],
      aircraft: ['', Validators.required],
      duration: ['', [Validators.required, Validators.min(1)]],
      priceECONOMY: ['', [Validators.required, Validators.min(1)]],
      priceBUSINESS: ['', [Validators.required, Validators.min(1)]],
      priceBASE: ['', [Validators.required, Validators.min(1)]],
      priceDELUXE: ['', [Validators.required, Validators.min(1)]],
      priceLUXURY: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit() {
    this.loadFlights();
    this.loadAircrafts();
  }

  get stopovers() {
    return this.flightForm.get('stopovers') as FormArray;
  }

  addStopover() {
    this.stopovers.push(this.fb.control('', Validators.required));
    this.filteredStopoverAirports.push([]);
  }

  removeStopover(index: number) {
    this.stopovers.removeAt(index);
    this.filteredStopoverAirports.splice(index, 1);
  }


   openAddFlight() {
    this.showAddFlight = true;
    this.flightForm.reset();
    this.stopovers.clear();
    this.filteredStopoverAirports = [];
    this.error = null;
    this.success = false;
  }

  closeAddFlight() {
    this.showAddFlight = false;
    this.error = null;
    this.success = false;
  }

  onAirportInput(field: 'from' | 'to') {
    const query = this.flightForm.get(field)?.value;
    if (typeof query === 'string' && query.length > 0) {
      this.http.get<any>(`${environment.apiUrl}/api/navigate/airports?query=${encodeURIComponent(query)}`).subscribe({
        next: res => {
          const airports = Array.isArray(res) ? res : res.airports ?? [];
          if (field === 'from') this.filteredFromAirports = airports;
          else this.filteredToAirports = airports;
        },
        error: () => {
          if (field === 'from') this.filteredFromAirports = [];
          else this.filteredToAirports = [];
        }
      });
    } else {
      if (field === 'from') this.filteredFromAirports = [];
      else this.filteredToAirports = [];
    }
  }

  onStopoverInput(index: number) {
    const query = this.stopovers.at(index).value;
    if (typeof query === 'string' && query.length > 0) {
      this.http.get<any>(`${environment.apiUrl}/api/navigate/airports?query=${encodeURIComponent(query)}`).subscribe({
        next: res => {
          this.filteredStopoverAirports[index] = Array.isArray(res) ? res : res.airports ?? [];
        },
        error: () => {
          this.filteredStopoverAirports[index] = [];
        }
      });
    } else {
      this.filteredStopoverAirports[index] = [];
    }
  }

  private getAirlineNameFromToken(): string | null {
    const token = localStorage.getItem('jwt_token');
    if (!token) return null;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.airlineName || null;
    } catch {
      return null;
    }
  }

  displayAirport(airport: any): string {
    return airport ? `${airport.name} (${airport.city}, ${airport.country})` : '';
  }

  loadAircrafts() {
    const airlineName = this.getAirlineNameFromToken();
    this.http.get<any>(`${environment.apiUrl}/api/airlines/aircrafts/${airlineName}`, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('jwt_token')}` }
    }).subscribe({
      next: res => {
        this.aircrafts = res.aircrafts ?? [];
      },
      error: () => {
        this.aircrafts = [];
      }
    });
  }

removeFlight(flightUUID: string) {
  this.flights = this.flights.filter(f => f.code !== flightUUID);
}

  onCreateFlight() {
    if (this.flightForm.invalid) return;
    this.loading = true;
    this.error = null;
    this.success = false;

    // Salva l'orario di partenza selezionato
    this.departureTime = this.flightForm.value.departureTime;

    // Costruisci l'array delle rotte (partenza, scali, arrivo)
    const from = this.flightForm.value.from.id;
    const to = this.flightForm.value.to.id;
    const stopovers = this.stopovers.value.map((s: any) => s.id);
    const routeIds = [from, ...stopovers, to];

    // Costruisci le rotte come array di oggetti {departure, destination}
    const routes = [];
    for (let i = 0; i < routeIds.length - 1; i++) {
      routes.push({ departure: routeIds[i], destination: routeIds[i + 1] });
    }

    const liftOffDate = new Date(
      this.flightForm.value.departureDate.getFullYear(),
      this.flightForm.value.departureDate.getMonth(),
      this.flightForm.value.departureDate.getDate(),
      this.flightForm.value.departureTime?.getHours() ?? 0,
      this.flightForm.value.departureTime?.getMinutes() ?? 0,
      0
    ).toISOString().replace(/Z$/, '');

    const body = {
      duration: this.flightForm.value.duration,
      liftOffDateLOCAL: liftOffDate,
      aircraftId: this.flightForm.value.aircraft,
      routeDeparture: routes[0].departure,
      routeDestination: routes[0].destination
    };


    this.http.post<any>(`${environment.apiUrl}/api/navigate/flights`, body, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('jwt_token')}` }
    }).subscribe({
      next: (res) => {
         this.loadFlights();
        this.success = true;
        this.loading = false;
        const UUIDflight = res.flight.code;
        const ticketsArray = [
          { type: 'ECONOMY', price: this.flightForm.value.priceECONOMY },
          { type: 'BUSINESS', price: this.flightForm.value.priceBUSINESS },
          { type: 'BASE', price: this.flightForm.value.priceBASE },
          { type: 'DELUXE', price: this.flightForm.value.priceDELUXE },
          { type: 'LUXURY', price: this.flightForm.value.priceLUXURY }
        ];

        this.flightForm.reset();
        this.stopovers.clear();
        this.filteredStopoverAirports = [];
        

        

        const token = localStorage.getItem('jwt_token');
        this.http.post<any>(
          `${environment.apiUrl}/api/airlines/tickets`,
          {
            flightCode: UUIDflight,
            ticketsArray: ticketsArray
          },
          {
            headers: { 'Authorization': `Bearer ${token}` }
          }
        ).subscribe();
      },
      error: err => {
        this.error = err.error?.error || 'Errore nella creazione del volo';
        this.loading = false;
      }
    });
  }

  loadFlights() {
    this.loading = true;
    this.http.get<{ message: string, flights: any[] }>(
      `${environment.apiUrl}/api/airlines/flights`,
      {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('jwt_token')}` }
      }
    ).subscribe({
      next: async res => {
        // Per ogni volo, recupera info aeroporti
        const flightsWithLocations = await Promise.all(res.flights.map(async (flight) => {
          // Fetch departure airport
          const depRes = await fetch(`${environment.apiUrl}/api/navigate/airports/${flight.route_departure}`);
          const depData = await depRes.json();
          const departure = depData.airport;
          // Fetch destination airport
          const destRes = await fetch(`${environment.apiUrl}/api/navigate/airports/${flight.route_destination}`);
          const destData = await destRes.json();
          const destination = destData.airport;

          return {
            ...flight,
              aircraft_details: flight.aircraft_details,
            departure_location: departure ? `${departure.name} (${departure.city}, ${departure.country})` : '',
            destination_location: destination ? `${destination.name} (${destination.city}, ${destination.country})` : ''
          };
        }));
        this.flights = flightsWithLocations;
        this.loading = false;
      },
      error: err => {
        this.error = err.error?.error || 'Errore nel caricamento voli';
        this.loading = false;
      }
    });
  }

}
