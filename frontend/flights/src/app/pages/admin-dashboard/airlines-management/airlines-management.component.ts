import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AirlineCardComponent } from '../../../components/airline-card/airline-card.component';
import { environment } from '../../../../environments/environment';

interface Airline {
  name: string;
  country: string;
  motto: string;
}

@Component({
  selector: 'app-airlines-management',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    AirlineCardComponent
  ],
  templateUrl: './airlines-management.component.html',
  styleUrls: ['./airlines-management.component.css']
})
export class AirlinesManagementComponent implements OnInit {
  airlines: Airline[] = [];
  loading = false;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadAirlines();
  }

  loadAirlines(): void {
    this.loading = true;
    this.error = null;
    this.http.get<{ airlines: Airline[] }>(`${environment.apiUrl}/api/airlines/airlines`).subscribe({
      next: (res) => {
        this.airlines = res.airlines;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Impossibile caricare le compagnie aeree. ' +
          (err.error?.error || 'Si è verificato un errore.');
        this.loading = false;
      }
    });
  }

  deleteAirline(airlineName: string): void {
    this.loading = true;
    // Sostituisci con il vero endpoint di DELETE se disponibile
    this.http.delete<{ message: string }>(`${environment.apiUrl}/api/airlines/airlines/${encodeURIComponent(airlineName)}`)
      .subscribe({
        next: () => {
          this.airlines = this.airlines.filter(a => a.name !== airlineName);
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Impossibile eliminare la compagnia. ' +
            (err.error?.error || 'Si è verificato un errore.');
          this.loading = false;
        }
      });
  }
}