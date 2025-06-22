import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    CommonModule, 
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  constructor(public router: Router) {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('jwt_token');
  }

  getUserName(): string | null {
    const token = localStorage.getItem('jwt_token');
    if (!token) return null;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      // Per airline, mostra il nome compagnia
      if (payload.airlineName) return payload.airlineName;
      // Per admin/utente normale
      return payload.name || payload.email || null;
    } catch {
      return null;
    }
  }

  getRoleFromToken(): number | null {
    const token = localStorage.getItem('jwt_token');
    if (!token) return null;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.role;
    } catch {
      return null;
    }
  }

  logout() {
    localStorage.removeItem('jwt_token');
    this.router.navigate(['/']).then(() => window.location.reload());
  }

  isCurrentRoute(route: string): boolean {
    const current = this.router.url.split('?')[0].replace(/\/$/, '');
    const target = route.replace(/\/$/, '');
    if (target === '') return current === ''; // homepage
    return current.startsWith(target);
  }

  goToProfile() {
    const token = localStorage.getItem('jwt_token');
    if (!token) {
      this.router.navigate(['/signin']);
      return;
    }
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      if (payload.role === 0) {
        this.router.navigate(['/profile-customer']);
      }
    } catch {
      this.router.navigate(['/signin']);
    }
  }

  isAirline(): boolean {
    const token = localStorage.getItem('jwt_token');
    if (!token) return false;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.role === 2;
    } catch {
      return false;
    }
  }
}
