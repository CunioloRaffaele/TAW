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
  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('postmessages_token');
  }

  getUserName(): string | null {
    const token = localStorage.getItem('postmessages_token');
    if (!token) return null;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.name || payload.email || null;
    } catch {
      return null;
    }
  }

  getRoleFromToken(): number | null {
    const token = localStorage.getItem('postmessages_token');
    if (!token) return null;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.role;
    } catch {
      return null;
    }
  }

  logout() {
    localStorage.removeItem('postmessages_token');
    this.router.navigate(['/']).then(() => window.location.reload());
  }

  isCurrentRoute(route: string): boolean {
    const current = this.router.url.split('?')[0].replace(/\/$/, '');
    const target = route.replace(/\/$/, '');
    if (target === '') return current === ''; // homepage
    return current.startsWith(target);
  }
}
