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
import { debounceTime, switchMap, catchError } from 'rxjs/operators';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

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

    this.filteredFromAirports = this.searchForm.get('from')!.valueChanges.pipe(
      debounceTime(300),
      switchMap(value => this.searchAirports(value))
    );
    this.filteredToAirports = this.searchForm.get('to')!.valueChanges.pipe(
      debounceTime(300),
      switchMap(value => this.searchAirports(value))
    );
  }

  searchAirports(query: string): Observable<any[]> {
    if (!query || query.length < 2) return of([]);
    return this.http.get<any[]>(`/api/navigate/airports/${encodeURIComponent(query)}`).pipe(
      catchError(() => of([]))
    );
  }

  onSearch() {
    if (this.searchForm.invalid) return;
    console.log('Ricerca voli:', this.searchForm.value);
  }
}
