import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})

export class LeafletMapComponent implements AfterViewInit {
  private map!: L.Map;

  constructor(private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.map = L.map('map').setView([45.4642, 9.19], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.loadAirports();
  }

  private loadAirports(): void {
    const url = `${environment.apiUrl}/api/navigate/airports/`;
    this.http.get<any>(url).subscribe({
      next: (response) => {
        if (response.airports) {
          response.airports.forEach((airport: any) => {
            if (airport.lat && airport.lan) {
              L.marker([airport.lat, airport.lan])
                .addTo(this.map)
                .bindPopup(`<b>${airport.name}</b><br>${airport.city}, ${airport.country}`);
            }
          });
        }
      },
      error: (err) => {
        console.error('Failed to load airports:', err);
      }
    });
  }
}