import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlightCardComponent } from '../../components/flight-card/flight-card.component'; 

@Component({
  selector: 'app-flights-display',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    FlightCardComponent
  ],
  templateUrl: './flights-display.component.html',
  styleUrls: ['./flights-display.component.css']
})
export class FlightsDisplayComponent {
  searchData: any;
  flights: any[] = [];
  loading = false;
  error: string | null = null;

  constructor(private router: Router, private http: HttpClient) {
    const nav = this.router.getCurrentNavigation();
    this.searchData = nav?.extras.state?.['searchData'];
    if (this.searchData) {
      this.loadFlights();
    } else {
      this.error = 'Dati di ricerca mancanti';
    }
  }

  loadFlights() {
    this.loading = true;
    this.http.post<{ message: string, flights: any[] }>(
      `${environment.apiUrl}/api/navigate/flights`,
      this.searchData
    ).subscribe({
      next: res => {
        this.flights = res.flights;
        this.loading = false;
      },
      error: err => {
        this.error = err.error?.error || 'Errore nella ricerca voli';
        this.loading = false;
      }
    });
  }
}
