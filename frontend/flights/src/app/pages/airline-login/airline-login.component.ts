import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-airline-login',
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
  templateUrl: './airline-login.component.html',
  styleUrls: ['./airline-login.component.css']
})
export class AirlineLoginComponent {
  loginForm: FormGroup;
  loading = false;
  error: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.invalid) return;
    this.loading = true;
    this.error = null;

    this.http.post<{ message: string, token: string }>(
      'http://localhost:3000/api/airlines/login',
      this.loginForm.value
    ).subscribe({
      next: (res) => {
        // Salva il token dove preferisci (localStorage/sessionStorage)
        localStorage.setItem('airlineToken', res.token);
        this.loading = false;
        // Reindirizza alla dashboard airline o mostra messaggio di successo
      },
      error: (err) => {
        this.error = err.error?.message || 'Credenziali non valide';
        this.loading = false;
      }
    });
  }
}
