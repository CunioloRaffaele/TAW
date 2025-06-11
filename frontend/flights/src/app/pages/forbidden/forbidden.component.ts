import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forbidden',
  template: `
    <div class="forbidden-container">
      <h2>Accesso negato</h2>
      <p>Non hai i permessi per accedere a questa pagina.</p>
      <button mat-raised-button color="primary" (click)="goHome()">Torna alla homepage</button>
    </div>
  `,
  styles: [`
    .forbidden-container {
      text-align: center;
      margin-top: 60px;
    }
    button {
      margin-top: 24px;
    }
  `]
})
export class ForbiddenComponent {
  constructor(private router: Router) {}
  goHome() {
    this.router.navigate(['/']);
  }
}
