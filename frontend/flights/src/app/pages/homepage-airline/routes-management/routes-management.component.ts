import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouteCardComponent } from '../../../components/route-card/route-card.component';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-routes-management',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouteCardComponent,
  ],
  templateUrl: './routes-management.component.html',
  styleUrls: ['./routes-management.component.css'],
})
export class RoutesManagementComponent implements OnInit {
  stats: any = [];
  routes: any[] = [];
  loading = false;
  error: string | null = null;

  showAddDialog = false;
  addRouteForm: FormGroup;
  loadingAdd = false;
  addError: string | null = null;

  filteredFromAirports: any[] = [];
  filteredToAirports: any[] = [];

  showCreateDialog = false;
  createRouteForm: FormGroup;
  loadingCreate = false;
  createError: string | null = null;
  filteredFromAirportsCreate: any[] = [];
  filteredToAirportsCreate: any[] = [];

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.createRouteForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
    });
    this.addRouteForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
    });
  }

  airlineName: string | null = null;

  ngOnInit(): void {
    this.airlineName = this.getAirlineNameFromToken();
    this.loadRoutes();
  }

  openCreateDialog() {
    this.showCreateDialog = true;
    this.createRouteForm.reset();
    this.filteredFromAirportsCreate = [];
    this.filteredToAirportsCreate = [];
    this.createError = null;
  }
  closeCreateDialog() {
    this.showCreateDialog = false;
    this.createError = null;
  }
  onAirportInputCreate(field: 'from' | 'to') {
    const query = this.createRouteForm.get(field)?.value;
    if (typeof query === 'string' && query.length > 0) {
      this.http
        .get<any>(
          `${
            environment.apiUrl
          }/api/navigate/airports?query=${encodeURIComponent(query)}`
        )
        .subscribe({
          next: (res) => {
            const airports = Array.isArray(res) ? res : res.airports ?? [];
            if (field === 'from') this.filteredFromAirportsCreate = airports;
            else this.filteredToAirportsCreate = airports;
          },
          error: () => {
            if (field === 'from') this.filteredFromAirportsCreate = [];
            else this.filteredToAirportsCreate = [];
          },
        });
    } else {
      if (field === 'from') this.filteredFromAirportsCreate = [];
      else this.filteredToAirportsCreate = [];
    }
  }

  loadStats() {
    this.http
      .get(`${environment.apiUrl}/api/airlines/stats/routes`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt_token')}`,
        },
      })
      .subscribe({
        next: (res: any) => {
          this.stats = res.stats;
          // Ora aggiorna le rotte con le statistiche
          if (this.routes && this.routes.length > 0) {
            this.routes = this.routes.map((route) => {
              const key = `${route.route_departure}-${route.route_destination}`;
              const stats =
                this.stats && this.stats[key]
                  ? this.stats[key]
                  : {
                      flightCount: 0,
                      ticketCount: 0,
                      bookingsCount: 0,
                      trendPercentage: 0,
                    };
              return { ...route, stats };
            });
          }
        },
        error: (err) => {
          console.error('Errore nel caricamento delle statistiche:', err);
        },
      });
  }

  onCreateRoute() {
    if (this.createRouteForm.invalid) return;
    this.loadingCreate = true;
    this.createError = null;

    const from = this.createRouteForm.value.from;
    const to = this.createRouteForm.value.to;
    this.http
      .post(
        `${environment.apiUrl}/api/navigate/routes`,
        {
          origin: from.id,
          destination: to.id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt_token')}`,
          },
        }
      )
      .subscribe({
        next: () => {
          this.loadingCreate = false;
          this.showCreateDialog = false;
          this.loadRoutes();
        },
        error: (err) => {
          this.createError =
            err.error?.error || 'Errore nella creazione della rotta';
          this.loadingCreate = false;
        },
      });
  }

  private getAirlineNameFromToken(): string | null {
    const token = localStorage.getItem('jwt_token');
    if (!token) return null;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.airlineName || null;
    } catch {
      return null;
    }
  }

  loadRoutes() {
    this.loading = true;
    this.error = null;
    if (!this.airlineName) {
      this.error = 'Nome compagnia aerea non trovato';
      this.loading = false;
      return;
    }
    this.http
      .get<{ routes: any[] }>(`${environment.apiUrl}/api/airlines/routes`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt_token')}`,
        },
        params: { airline: this.airlineName ?? '' },
      })
      .subscribe({
        next: (res) => {
          this.routes = res.routes;
          this.loading = false;
          this.loadStats(); // <-- carica le statistiche solo dopo aver caricato le rotte
        },
        error: (err) => {
          this.error =
            'Errore nel caricamento delle rotte (possibile assenza di rotte in cui operi)';
          this.loading = false;
        },
      });
  }

  onDisconnect(routeId: number) {
    this.loading = true;
    this.http
      .delete(`${environment.apiUrl}/api/airlines/routes/${routeId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt_token')}`,
        },
      })
      .subscribe({
        next: () => this.loadRoutes(),
        error: (err) => {
          this.error = 'Errore nella disconnessione della rotta';
          this.loading = false;
        },
      });
  }

  openAddDialog() {
    this.showAddDialog = true;
    this.addRouteForm.reset();
    this.filteredFromAirports = [];
    this.filteredToAirports = [];
  }
  closeAddDialog() {
    this.showAddDialog = false;
    this.addError = null;
  }

  onAirportInput(field: 'from' | 'to') {
    const query = this.addRouteForm.get(field)?.value;
    if (typeof query === 'string' && query.length > 0) {
      this.http
        .get<any>(
          `${
            environment.apiUrl
          }/api/navigate/airports?query=${encodeURIComponent(query)}`
        )
        .subscribe({
          next: (res) => {
            const airports = Array.isArray(res) ? res : res.airports ?? [];
            if (field === 'from') this.filteredFromAirports = airports;
            else this.filteredToAirports = airports;
          },
          error: () => {
            if (field === 'from') this.filteredFromAirports = [];
            else this.filteredToAirports = [];
          },
        });
    } else {
      if (field === 'from') this.filteredFromAirports = [];
      else this.filteredToAirports = [];
    }
  }

  displayAirport(airport: any): string {
    return airport
      ? `${airport.name} (${airport.city}, ${airport.country})`
      : '';
  }

  onAddRoute() {
    if (this.addRouteForm.invalid) return;
    this.loadingAdd = true;
    this.addError = null;

    const from = this.addRouteForm.value.from;
    const to = this.addRouteForm.value.to;

    // Invia direttamente la richiesta di associazione/creazione
    this.http
      .post(
        `${environment.apiUrl}/api/airlines/routes`,
        {
          departure: from.id,
          destination: to.id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt_token')}`,
          },
        }
      )
      .subscribe({
        next: () => {
          this.loadingAdd = false;
          this.showAddDialog = false;
          this.loadRoutes();
        },
        error: (err) => {
          this.addError =
            err.error?.error || "Errore nell'aggiunta della rotta";
          this.loadingAdd = false;
        },
      });
  }
}
