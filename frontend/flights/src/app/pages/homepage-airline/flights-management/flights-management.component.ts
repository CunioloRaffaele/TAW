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
    MatSelectModule],
  templateUrl: './flights-management.component.html',
  styleUrls: ['./flights-management.component.css']
})
export class FlightsManagementComponent implements OnInit {
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
      basePrice: ['', [Validators.required, Validators.min(1)]],
      from: ['', Validators.required],
      to: ['', Validators.required],
      stopovers: this.fb.array([]),
      departureDate: ['', Validators.required],
      aircraft: ['', Validators.required],
      duration: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit() {
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
    const token = localStorage.getItem('postmessages_token');
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
      headers: { 'Authorization': `Bearer ${localStorage.getItem('postmessages_token')}` }
    }).subscribe({
      next: res => {
        this.aircrafts = res.aircrafts ?? [];
      },
      error: () => {
        this.aircrafts = [];
      }
    });
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
      headers: { 'Authorization': `Bearer ${localStorage.getItem('postmessages_token')}` }
    }).subscribe({
      next: () => {
        this.success = true;
        this.loading = false;
        this.flightForm.reset();
        this.stopovers.clear();
        this.filteredStopoverAirports = [];
      },
      error: err => {
        this.error = err.error?.error || 'Errore nella creazione del volo';
        this.loading = false;
      }
    });
  }
}
