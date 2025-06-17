import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { debounceTime, switchMap, catchError, tap, map } from 'rxjs/operators';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    MatAutocompleteModule,
    HttpClientModule
  ],
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent {
  searchForm: FormGroup;
  classes = ['Economy', 'Business', 'First'];
  travelers = [1, 2, 3, 4, 5, 6, 7, 8];

  filteredFromAirports: Observable<any[]> = of([]);
  filteredToAirports: Observable<any[]> = of([]);

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.searchForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      departureDate: ['', Validators.required],
      returnDate: [''],
      travelers: [1, Validators.required],
      travelClass: ['Economy', Validators.required]
    });

    // Autocomplete per "from"
    this.filteredFromAirports = this.searchForm.get('from')!.valueChanges.pipe(
      debounceTime(300),
      switchMap(value => {
        if (typeof value !== 'string') return of([]);
        const toValue = this.searchForm.get('to')!.value;
        if (toValue && toValue.id) {
          // Cerca solo aeroporti da cui si può arrivare a "to"
          return this.searchAvailableDepartures(toValue.id, value);
        }
        // Altrimenti mostra tutti gli aeroporti
        return this.searchAirports(value);
      })
    );

    // Autocomplete per "to"
    this.filteredToAirports = this.searchForm.get('to')!.valueChanges.pipe(
      debounceTime(300),
      switchMap(value => {
        if (typeof value !== 'string') return of([]);
        const fromValue = this.searchForm.get('from')!.value;
        if (fromValue && fromValue.id) {
          // Cerca solo aeroporti raggiungibili da "from"
          return this.searchAvailableDestinations(fromValue.id, value);
        }
        // Altrimenti mostra tutti gli aeroporti
        return this.searchAirports(value);
      })
    );
  }

  // Cerca tutti gli aeroporti (autocomplete base)
  searchAirports(query: string): Observable<any[]> {
    if (!query || query.length < 2) return of([]);
    return this.http.get<any>(`${environment.apiUrl}/api/navigate/airports?query=${encodeURIComponent(query)}`).pipe(
      map(res => Array.isArray(res) ? res : res.airports ?? []),
      catchError(() => of([]))
    );
  }

  // Cerca partenze disponibili dato una destinazione
  searchAvailableDepartures(departure: string, query: string): Observable<any[]> {
    if (!query || query.length < 2) return of([]);
    return this.http.get<any>(`${environment.apiUrl}/api/navigate/airports/${encodeURIComponent(departure)}/incoming-routes`).pipe(
      map(res => {
        // Se la risposta è un array di oggetti con destinationAirport, estrai solo gli aeroporti
        if (Array.isArray(res.airports) && res.airports.length && res.airports[0].departureAirport) {
          return res.airports.map((r: any) => r.departureAirport);
        }
        // Altrimenti fallback classico
        return Array.isArray(res) ? res : res.airports ?? [];
      }),
      catchError(() => of([]))
    );
  }
    

  // Cerca destinazioni disponibili dato una partenza
  searchAvailableDestinations(departure: string, query: string): Observable<any[]> {
    if (!query || query.length < 2) return of([]);
    return this.http.get<any>(`${environment.apiUrl}/api/navigate/airports/${encodeURIComponent(departure)}/routes`).pipe(
      map(res => {
        // Se la risposta è un array di oggetti con destinationAirport, estrai solo gli aeroporti
        if (Array.isArray(res.airports) && res.airports.length && res.airports[0].destinationAirport) {
          return res.airports.map((r: any) => r.destinationAirport);
        }
        // Altrimenti fallback classico
        return Array.isArray(res) ? res : res.airports ?? [];
      }),
      catchError(() => of([]))
    );
  }

  onSearch() {
    if (this.searchForm.invalid) return;
    console.log('Ricerca voli:', this.searchForm.value);
  }

  displayAirport(airport: any): string {
    return airport && airport.name ? `${airport.name} (${airport.city})` : '';
  }
}