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
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { MatCheckbox } from '@angular/material/checkbox';

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
    HttpClientModule,
    MatCheckbox
  ],
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent {
  searchForm: FormGroup;
  classes = ['BASE', 'ECONOMY', 'BUSINESS', 'DELUXE', 'LUXURY'];
  travelers = [1, 2, 3, 4, 5, 6, 7, 8];

  filteredFromAirports: Observable<any[]> = of([]);
  filteredToAirports: Observable<any[]> = of([]);

  allAirports: any[] = [];
  allAirportsLoaded = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.searchForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      tripType: ['oneway', Validators.required], 
      departureDate: ['', Validators.required],
      returnDate: [''],
      travelers: [1, Validators.required],
      travelClass: ['ECONOMY', Validators.required],
      directOnly: [false] 
    });

    // Autocomplete per "from"
    this.filteredFromAirports = this.searchForm.get('from')!.valueChanges.pipe(
      debounceTime(300),
      switchMap(value => {
        if (typeof value !== 'string') return of([]);
        const toValue = this.searchForm.get('to')!.value;
        const directOnly = this.searchForm.get('directOnly')!.value;

        if (directOnly) {
          // Se la box TO è vuota, mostra tutti gli aeroporti e filtra se si digita
          if (!toValue || !toValue.id) {
            return this.getAllAirportsFiltered(value);
          }
          // Se la box TO è già selezionata, mostra solo aeroporti di partenza collegati a quella destinazione
          return this.searchAvailableDepartures(toValue.id, value).pipe(
            map(list => this.filterAirports(list, value))
          );
        }

        // SOLO VOLI DIRETTI NON SPUNTATO: mostra tutti e filtra sempre lato frontend
        return this.getAllAirportsFiltered(value);
      })
    );

    // Autocomplete per "to"
    this.filteredToAirports = this.searchForm.get('to')!.valueChanges.pipe(
      debounceTime(300),
      switchMap(value => {
        if (typeof value !== 'string') return of([]);
        const fromValue = this.searchForm.get('from')!.value;
        const directOnly = this.searchForm.get('directOnly')!.value;

        if (directOnly) {
          // Se la box FROM è vuota, mostra tutti gli aeroporti e filtra se si digita
          if (!fromValue || !fromValue.id) {
            return this.getAllAirportsFiltered(value);
          }
          // Se la box FROM è già selezionata, mostra solo aeroporti di destinazione collegati a quella partenza
          return this.searchAvailableDestinations(fromValue.id, value).pipe(
            map(list => this.filterAirports(list, value))
          );
        }

        // SOLO VOLI DIRETTI NON SPUNTATO: mostra tutti e filtra sempre lato frontend
        return this.getAllAirportsFiltered(value);
      })
    );

    this.searchForm.get('tripType')!.valueChanges.subscribe(type => {
      if (type === 'oneway') {
        this.searchForm.get('returnDate')!.setValue('');
      }
    });
  }

  // Cerca tutti gli aeroporti (autocomplete base)
  searchAirports(query: string, all: boolean = false): Observable<any[]> {
    if (all) {
      if (!this.allAirportsLoaded) {
        return this.http.get<any>(`${environment.apiUrl}/api/navigate/airports`).pipe(
          map(res => {
            this.allAirports = Array.isArray(res) ? res : res.airports ?? [];
            this.allAirportsLoaded = true;
            if (query && query.length > 0) {
              const q = query.toLowerCase();
              return this.allAirports.filter((a: any) =>
                a.name?.toLowerCase().includes(q) ||
                a.city?.toLowerCase().includes(q) ||
                a.country?.toLowerCase().includes(q)
              );
            }
            return this.allAirports;
          }),
          catchError(() => of([]))
        );
      } else {
        if (query && query.length > 0) {
          const q = query.toLowerCase();
          return of(this.allAirports.filter((a: any) =>
            a.name?.toLowerCase().includes(q) ||
            a.city?.toLowerCase().includes(q) ||
            a.country?.toLowerCase().includes(q)
          ));
        }
        return of(this.allAirports);
      }
    }
    // Altrimenti filtra per query (min 1 carattere) lato backend
    if (!query || query.length < 1) return of([]);
    return this.http.get<any>(`${environment.apiUrl}/api/navigate/airports?query=${encodeURIComponent(query)}`).pipe(
      map(res => Array.isArray(res) ? res : res.airports ?? []),
      catchError(() => of([]))
    );
  }

  // Cerca partenze disponibili dato una destinazione
  searchAvailableDepartures(departure: string, query: string): Observable<any[]> {
    return this.http.get<any>(`${environment.apiUrl}/api/navigate/airports/${encodeURIComponent(departure)}/incoming-routes`).pipe(
      map(res => {
        let list: any[] = [];
        if (Array.isArray(res.airports) && res.airports.length && res.airports[0].departureAirport) {
          list = res.airports.map((r: any) => r.departureAirport);
        } else {
          list = Array.isArray(res) ? res : res.airports ?? [];
        }
        // Filtra solo se c'è una query
        if (query && query.length > 0) {
          const q = query.toLowerCase();
          return list.filter((a: any) =>
            a.name?.toLowerCase().includes(q) ||
            a.city?.toLowerCase().includes(q) ||
            a.country?.toLowerCase().includes(q)
          );
        }
        return list;
      }),
      catchError(() => of([]))
    );
  }
    

  // Cerca destinazioni disponibili dato una partenza
  searchAvailableDestinations(departure: string, query: string): Observable<any[]> {
    return this.http.get<any>(`${environment.apiUrl}/api/navigate/airports/${encodeURIComponent(departure)}/routes`).pipe(
      map(res => {
        let list: any[] = [];
        if (Array.isArray(res.airports) && res.airports.length && res.airports[0].destinationAirport) {
          list = res.airports.map((r: any) => ({
            ...r.destinationAirport,
            id: r.destinationAirport.id ?? r.destination
          }));
        } else {
          list = Array.isArray(res) ? res : res.airports ?? [];
        }
        // Filtra solo se c'è una query
        if (query && query.length === 0) {
          const q = query.toLowerCase();
          return list.filter((a: any) =>
            a.name?.toLowerCase().includes(q) ||
            a.city?.toLowerCase().includes(q) ||
            a.country?.toLowerCase().includes(q)
          );
        }
        return list;
      }),
      catchError(() => of([]))
    );
  }

  onSearch() {
    const from = this.searchForm.value.from?.id || this.searchForm.value.from;
    const to = this.searchForm.value.to?.id || this.searchForm.value.to;
    const departureDate = this.searchForm.value.departureDate;
    let returnDate = this.searchForm.value.returnDate;

    const formatDate = (date: Date) =>
      date ? `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2,'0')}-${date.getDate().toString().padStart(2,'0')} 00:00:00` : '';

    // Se solo andata, imposta returnDate al giorno dopo la partenza
    if (this.searchForm.value.tripType === 'oneway') {
      const nextDay = new Date(departureDate);
      nextDay.setDate(nextDay.getDate() + 1);
      returnDate = nextDay;
    }

    const searchData = {
      from,
      to,
      departureDate: formatDate(departureDate),
      returnDate: formatDate(returnDate),
      passengers: this.searchForm.value.travelers,
      classType: this.searchForm.value.travelClass,
      directOnly: this.searchForm.value.directOnly,
      tripType: this.searchForm.value.tripType
    };

    this.router.navigate(['/flights-display'], { state: { searchData } });
  }

  displayAirport(airport: any): string {
    return airport && airport.name ? `${airport.name} (${airport.city})` : '';
  }

  // Funzione helper per caricare e filtrare tutti gli aeroporti lato frontend
  getAllAirportsFiltered(query: string): Observable<any[]> {
    if (!this.allAirportsLoaded) {
      return this.http.get<any>(`${environment.apiUrl}/api/navigate/airports`).pipe(
        map(res => {
          this.allAirports = Array.isArray(res) ? res : res.airports ?? [];
          this.allAirportsLoaded = true;
          return this.filterAirports(this.allAirports, query);
        }),
        catchError(() => of([]))
      );
    } else {
      return of(this.filterAirports(this.allAirports, query));
    }
  }

  // Funzione helper per filtrare aeroporti lato frontend
  filterAirports(list: any[], query: string): any[] {
    if (!query || query.length === 0) return list;
    const q = query.toLowerCase();
    return list.filter((a: any) =>
      a.name?.toLowerCase().includes(q) ||
      a.city?.toLowerCase().includes(q) ||
      a.country?.toLowerCase().includes(q)
    );
  }
}