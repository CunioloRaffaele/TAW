import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AircraftCardComponent } from '../../../components/aircraft-card/aircraft-card.component'; // Adjust the path as needed
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-aircrafts-management',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    AircraftCardComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule// Add your aircraft card component here
  ],
  templateUrl: './aircrafts-management.component.html',
  styleUrl: './aircrafts-management.component.css'
})

export class AircraftsManagementComponent implements OnInit {
  aircrafts: any[] = [];
  airlinename: string | null = null;
  loading = false;
  error: string | null = null;
  showAddAircraftDialog = false;
  addAircraftForm!: FormGroup;
  loadingAddAircraft = false;
  addAircraftError: string | null = null;


  constructor(private http: HttpClient, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.loadAircrafts();
    this.addAircraftForm = this.fb.group({
      aircraftType: ['', Validators.required],
      capacity: ['', [Validators.required, Validators.min(25), Validators.max(750)]]
    });
  }

  openAddAircraftDialog() {
    this.showAddAircraftDialog = true;
    this.addAircraftForm.reset();
    this.addAircraftError = null;
  }
  closeAddAircraftDialog() {
    this.showAddAircraftDialog = false;
    this.addAircraftError = null;
  }

  onAddAircraft() {
    if (this.addAircraftForm.invalid) return;
    this.loadingAddAircraft = true;
    this.addAircraftError = null;
    const { aircraftType, capacity } = this.addAircraftForm.value;

    this.http.post(`${environment.apiUrl}/api/airlines/aircrafts`, {
      aircraftType,
      capacity
    }, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('postmessages_token')}` }
    }).subscribe({
      next: () => {
        this.loadingAddAircraft = false;
        this.showAddAircraftDialog = false;
        this.loadAircrafts();
      },
      error: err => {
        this.addAircraftError = err.error?.error || 'Errore nell\'aggiunta dell\'aereo';
        this.loadingAddAircraft = false;
      }
    });
  }

  loadAircrafts(): void {
    const airlineName = this.getAirlineNameFromToken();
    if (!airlineName) {
      this.error = 'Nome compagnia non trovato';
      return;
    }
    this.loading = true;
    this.http.get<{ aircrafts: any[] }>(
      `${environment.apiUrl}/api/airlines/aircrafts/${encodeURIComponent(airlineName)}`
    ).subscribe({
      next: res => {
        this.aircrafts = res.aircrafts;
        this.loading = false;
      },
      error: err => {
        this.error = err.error?.error;
        this.loading = false;
      }
    });
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

  ondeleteAircraft(aircraftId: number) {
    this.loading = true;
    this.http.delete(`${environment.apiUrl}/api/airlines/aircrafts/${aircraftId}`, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('postmessages_token')}` }
    }).subscribe({
      next: () => {
        this.loadAircrafts();
      },
      error: err => {
        this.error = err.error?.error;
        this.loading = false;
      }
    });
  }

}
