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
    MatIconModule
  ],
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent {
  searchForm: FormGroup;
  classes = ['Economy', 'Business', 'First'];
  travelers = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      departureDate: ['', Validators.required],
      returnDate: [''],
      travelers: [1, Validators.required],
      travelClass: ['Economy', Validators.required]
    });
  }

  onSearch() {
    if (this.searchForm.invalid) return;
    // Qui puoi emettere un evento o navigare ai risultati
    console.log('Ricerca voli:', this.searchForm.value);
    // Esempio: this.router.navigate(['/results'], { queryParams: this.searchForm.value });
  }
}
