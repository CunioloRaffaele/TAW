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
    MatProgressSpinnerModule
  ],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  loginForm: FormGroup;
  loading = false;
  error: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.invalid) return;
    this.loading = true;
    this.error = null;

    this.http.post<{ message: string, token: string }>(
      `${environment.apiUrl}/api/user/login`,
      this.loginForm.value
    ).subscribe({
      next: (res) => {
        console.log("Data received when invoking the /login endpoint:");
        console.log(JSON.stringify(res));
        localStorage.setItem('userToken', res.token); // salva il token
        this.loading = false;
        // qui puoi aggiungere redirect o altre azioni post-login
      },
      error: (err) => {
        console.log("Errore dal backend:", err);
        this.error = err.error?.message || 'Credenziali non valide';
        this.loading = false;
      }
    });
  }
}
