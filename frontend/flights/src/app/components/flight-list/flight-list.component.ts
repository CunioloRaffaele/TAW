import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-flight-list',
  standalone: true,
  imports: [CommonModule, FlightCardComponent],
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnChanges {
  @Input() searchData: any;
  flights: any[] = [];
  loading = false;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnChanges() {
    if (this.searchData) {
      this.loadFlights(this.searchData);
    }
  }

  loadFlights(searchData: any) {
    this.loading = true;
    this.error = null;
    this.http.post<{ message: string, flights: any[] }>(
      `${environment.apiUrl}/api/navigate/flights`,
      searchData
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
