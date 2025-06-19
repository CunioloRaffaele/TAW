import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AirportCardComponent } from '../../../components/airport-card/airport-card.component';
import { environment } from '../../../../environments/environment';

interface Airport {
  id: number;
  name: string;
  city: string;
  country: string;
  time_zone: number;
}

@Component({
  selector: 'app-airports-management',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    AirportCardComponent
  ],
  templateUrl: './airports-management.component.html',
  styleUrls: ['./airports-management.component.css']
})

export class AirportsManagementComponent implements OnInit {
  airports: Airport[] = [];
  loading = false;
  error: string | null = null;
  sortBy: 'name' = 'name'; // Solo sort per nome
  sortDir: 'asc' | 'desc' = 'asc';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAirports();
  }

  fetchAirports(): void {
  this.loading = true;
  this.error = null;
  this.http.get<{ message: string; airports: Airport[] }>(`${environment.apiUrl}/api/navigate/airports`).subscribe({
    next: (res) => {
      this.airports = res.airports;
      this.loading = false;
    },
    error: (err) => {
      this.error = 'Failed to load airports.';
      this.loading = false;
    }
  });
}
  


  setSort(sort: 'name') {
    if (this.sortBy === sort) {
      // Se clicchi di nuovo sullo stesso, alterna la direzione
      this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortBy = sort;
      this.sortDir = 'asc'; // resetta a crescente quando cambi campo
    }
  }

  get sortedAirports(): Airport[] {
    return [...this.airports].sort((a, b) => {
      let cmp = a.name.localeCompare(b.name);
      return this.sortDir === 'asc' ? cmp : -cmp;
    });
  }
}