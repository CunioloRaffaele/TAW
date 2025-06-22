import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { forkJoin } from 'rxjs';
import { TripCardComponent } from '../../../components/trip-card/trip-card.component';

@Component({
  selector: 'app-profile-customer',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    HttpClientModule,
    TripCardComponent
  ],
  templateUrl: './profile-customer.component.html',
  styleUrl: './profile-customer.component.css',
})
export class ProfileCustomerComponent {
  tripsId: any[] = [];
  trips: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadTrips();
  }

  loadTrips(): void {
    this.http
      .get<any[]>(`${environment.apiUrl}/api/bookings/trips`,{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('postmessages_token')}`
        }
      })
      .subscribe({
        next: (data) => {
          for (let i = 0; i < data.length; i++) {
            this.tripsId.push(data[i].id);
          }

          // Import forkJoin at the top of the file

          // Create array of requests for each trip ID
          const tripRequests = this.tripsId.map(tripId => 
            this.http.get<any>(`${environment.apiUrl}/api/bookings/trips/${tripId}`, {
              headers: {
                'Authorization': `Bearer ${localStorage.getItem('postmessages_token')}`
              }
            })
          );

          // Execute all requests in parallel and wait for all to complete
          if (this.tripsId.length > 0) {
            forkJoin(tripRequests).subscribe({
              next: (tripDetails) => {
                this.trips = tripDetails;
                console.log('All trip details loaded successfully');
              },
              error: (error) => {
                console.error('Error loading trip details:', error);
              }
            });
          }

        },
        error: (error) => {
          console.error('Error loading trips:', error);
        },
      });
  }
}
