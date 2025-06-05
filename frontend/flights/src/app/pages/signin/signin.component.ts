import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signin',
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
    MatProgressSpinnerModule,
    RouterModule
  ],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  loginForm: FormGroup;
  loading = false;
  error: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Funzione per estrarre il ruolo dal token JWT
  private getRoleFromToken(token: string): number | null {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.role;
    } catch {
      return null;
    }
  }

  onLogin() {
    if (this.loginForm.invalid) return;
    this.loading = true;
    this.error = null;

    this.http.post<{ message: string, token: string }>(
      `${environment.apiUrl}/api/users/login`,
      {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
    ).subscribe({
      next: (res) => {
        localStorage.setItem('postmessages_token', res.token);
        const role = this.getRoleFromToken(res.token);
        this.loading = false;
        if (role === 1) {
          this.router.navigate(['/admin-dashboard']);
        } else {
          this.router.navigate(['/']);
        }
      },
      error: (err) => {
        // Stampa sempre la risposta del backend in console per debug
        console.error('Errore dal backend:', err);

        // Mostra il messaggio corretto a schermo
        if (err.error) {
          if (typeof err.error === 'string') {
            try {
              const parsed = JSON.parse(err.error);
              this.error = parsed.message || parsed.error || 'Errore sconosciuto';
            } catch {
              this.error = err.error;
            }
          } else if (typeof err.error === 'object') {
            this.error = err.error.message || err.error.error || 'Errore sconosciuto';
          } else {
            this.error = 'Errore sconosciuto';
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
