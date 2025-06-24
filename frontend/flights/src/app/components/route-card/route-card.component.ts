import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-route-card',
  standalone: true,
  imports: [CommonModule,MatProgressSpinnerModule, MatCardModule, MatIconModule, MatButtonModule, HttpClientModule],
  templateUrl: './route-card.component.html',
  styleUrls: ['./route-card.component.css']
})
export class RouteCardComponent implements OnInit {
  @Input() departureId!: number;
  @Input() destinationId!: number;
  @Input() routeId!: number;
  @Output() disconnect = new EventEmitter<number>();
  @Input() stats: any;

  departureAirport: any = null;
  destinationAirport: any = null;
  loading = true;
  error: string | null = null;
  showDisconnectConfirm = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAirports();
  }

  fetchAirports() {
    this.loading = true;
    this.error = null;
    Promise.all([
      this.http.get<any>(`${environment.apiUrl}/api/navigate/airports/${this.departureId}`).toPromise(),
      this.http.get<any>(`${environment.apiUrl}/api/navigate/airports/${this.destinationId}`).toPromise()
    ]).then(([fromRes, toRes]) => {
      this.departureAirport = fromRes.airport;
      this.destinationAirport = toRes.airport;
      this.loading = false;
    }).catch(() => {
      this.error = 'Errore nel caricamento degli aeroporti';
      this.loading = false;
    });
  }

  confirmDisconnect() {
    this.disconnect.emit(this.routeId);
    this.showDisconnectConfirm = false;
  }
}