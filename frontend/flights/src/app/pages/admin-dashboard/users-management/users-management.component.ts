/*
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { UserCardComponent } from '../../../components/user-card/user-card.component';

@Component({
  selector: 'app-users-management',
  standalone: true,
  imports: [CommonModule, MatCardModule, UserCardComponent],
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})
export class UsersManagementComponent { }

*/
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Cambiato qui
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UserCardComponent } from '../../../components/user-card/user-card.component';
import { environment } from '../../../../environments/environment';

interface User {
  id: number;
  name: string;
  email: string;
  role: number;
}

@Component({
  selector: 'app-users-management',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    UserCardComponent,
    MatProgressSpinnerModule,
    HttpClientModule // Aggiunto qui
  ],
  providers: [], // Rimosso provideHttpClient da qui
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})
export class UsersManagementComponent implements OnInit {
  users: User[] = [];
  loading = false;
  error: string | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true;
    this.error = null;

    // Assicuriamoci di inviare l'Authorization header
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem('jwt_token')}`
    };

    this.http.get<{ users: User[] }>(`${environment.apiUrl}/api/users/accounts`, { headers }).subscribe({
      next: (response) => {
        this.users = response.users;
        this.loading = false;
        console.log('Utenti\n', this.users);
      },
      error: (err) => {
        console.error('Errore nel caricamento degli utenti:', err);
        this.error = 'Impossibile caricare gli utenti. ' +
          (err.error?.error || 'Si è verificato un errore.');
        this.loading = false;
      }
    });
  }

  deleteUser(userId: number): void {
    this.loading = true;
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem('jwt_token')}`
    };

    this.http.delete<{ message: string }>(`${environment.apiUrl}/api/users/accounts/${userId}`, { headers })
      .subscribe({
        next: (response) => {
          console.log('Utente eliminato:', response.message);
          // Rimuovi l'utente dalla lista locale senza ricaricare tutto
          this.users = this.users.filter(user => user.id !== userId);
          this.loading = false;
        },
        error: (err) => {
          console.error('Errore nell\'eliminazione dell\'utente:', err);
          this.error = 'Impossibile eliminare l\'utente. ' +
            (err.error?.error || 'Si è verificato un errore.');
          this.loading = false;
        }
      });
  }
}