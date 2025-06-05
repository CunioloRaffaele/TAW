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
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-user-registration',
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
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  registrationForm: FormGroup;
  loading = false;
  error: string | null = null;
  success: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onRegister() {
    if (this.registrationForm.invalid) return;
    this.loading = true;
    this.error = null;
    this.success = null;

    const endpoint = `${environment.apiUrl}/api/users/user`;
    this.http.post<{ message: string, token: string }>(
      endpoint,
      this.registrationForm.value
    ).subscribe({
      next: (res) => {
        this.success = res.message || 'Registrazione avvenuta con successo!';
        this.loading = false;
        // Puoi salvare il token se vuoi: localStorage.setItem('userToken', res.token);
      },
      error: (err) => {
        // Stampa sempre la risposta del backend in console per debug
        console.error('Errore dal backend:', err);

        // Mostra il messaggio corretto a schermo
        if (err.error) {
          if (typeof err.error === 'string') {
            try {
              const parsed = JSON.parse(err.error);
              this.error = parsed.message || parsed.error || 'Errore durante la registrazione';
            } catch {
              this.error = err.error;
            }
          } else if (typeof err.error === 'object') {
            this.error = err.error.message || err.error.error || 'Errore durante la registrazione';
          } else {
            this.error = 'Errore durante la registrazione';
          }
        } else if (err.message) {
          this.error = err.message;
        } else {
          this.error = 'Errore di comunicazione con il server';
        }
        this.loading = false;
      }
    });
  }
}
