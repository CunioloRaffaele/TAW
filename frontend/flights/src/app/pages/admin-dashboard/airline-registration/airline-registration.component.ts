import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-app-airline-registration',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ],
  templateUrl: './airline-registration.component.html',
  styleUrls: ['./airline-registration.component.css']
})
export class AirlineRegistrationComponent {
  inviteForm: FormGroup;
  inviteCode: string | null = null;
  error: string | null = null;
  loading = false;
  copied = false;
  enrollmentUrl: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.inviteForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onInvite() {
    if (this.inviteForm.invalid) return;
    this.loading = true;
    this.error = null;
    this.inviteCode = null;
    this.copied = false;

    // Prendi il token dell'admin dal localStorage
    const token = localStorage.getItem('postmessages_token') || '';
    const endpoint = `${environment.apiUrl}/api/airlines/invite`;

    const airlineName = this.inviteForm.value.name;

    this.http.post<{ invitationCode: string }>(
      endpoint,
      { name: airlineName },
      {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        })
      }
    ).subscribe({
      next: (res) => {
        this.inviteCode = res.invitationCode;
        const airlineName = this.inviteForm.value.name;
        // Genera l’URL per la compagnia
        this.enrollmentUrl = `${window.location.origin}/airline-enrollment/${this.inviteCode}/${encodeURIComponent(airlineName)}`;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.message || err.message;
        this.loading = false;
      }
    });
  }

  copyCode() {
    if (this.inviteCode) {
      navigator.clipboard.writeText(this.inviteCode);
      this.copied = true;
      setTimeout(() => this.copied = false, 1500);
    }
  }

  copyEnrollmentUrl() {
    if (this.enrollmentUrl) {
      navigator.clipboard.writeText(this.enrollmentUrl);
      this.copied = true;
      setTimeout(() => this.copied = false, 1500);
    }
  }
}
