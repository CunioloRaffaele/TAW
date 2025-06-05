import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-airline-enrollment',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './airline-enrollment.component.html',
  styleUrls: ['./airline-enrollment.component.css']
})
export class AirlineEnrollmentComponent {
  enrollmentForm: FormGroup;
  loading = false;
  error: string | null = null;
  success = false;
  invitationCode: string = '';
  airlineName: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.enrollmentForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      country: ['', Validators.required],
      motto: ['', Validators.required]
    });

    this.invitationCode = this.route.snapshot.paramMap.get('invitationCode') || '';
    this.airlineName = this.route.snapshot.paramMap.get('airlineName') || '';
  }

  onEnroll() {
    if (this.enrollmentForm.invalid) return;
    this.loading = true;
    this.error = null;

    const endpoint = `${environment.apiUrl}/api/airlines/enroll/${this.invitationCode}/${this.airlineName}`;
    this.http.post(endpoint, this.enrollmentForm.value).subscribe({
      next: () => {
        this.success = true;
        this.loading = false;
        setTimeout(() => this.router.navigate(['/signin']), 2000);
      },
      error: (err) => {
        this.error = err.error?.message || 'Errore durante l\'enrollment';
        this.loading = false;
      }
    });
  }
}
