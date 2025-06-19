import { Component, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import * as L from 'leaflet';

// Fix icone marker Leaflet in Angular
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';

L.Marker.prototype.options.icon = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class LeafletMapComponent implements AfterViewInit {
  private map!: L.Map;
  private allAirports: any[] = [];
  private allMarkers: L.Marker[] = [];

  constructor(private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.map = L.map('map', {
      center: [45, 9],
      zoom: 4,
      zoomControl: true
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

    this.loadAirports();
  }

  private loadAirports(): void {
    this.http.get<any>(`${environment.apiUrl}/api/navigate/airports/`).subscribe({
      next: (response) => {
        this.allAirports = response.airports || [];
        this.showAllAirports();
      },
      error: (err) => {
        console.error('Errore caricamento aeroporti:', err);
      }
    });
  }

  private showAllAirports(): void {
    this.allMarkers.forEach(m => this.map.removeLayer(m));
    this.allMarkers = [];
    this.allAirports.forEach(airport => {
      const lat = airport.lat;
      const lng = airport.lng !== undefined ? airport.lng : airport.lan;
      if (lat && lng) {
        const marker = L.marker([lat, lng])
          .addTo(this.map)
          .bindPopup(`<b>${airport.name}</b><br>${airport.city}, ${airport.country}`);
        this.allMarkers.push(marker);
      }
    });
    if (this.allMarkers.length > 0) {
      const group = L.featureGroup(this.allMarkers);
      this.map.fitBounds(group.getBounds().pad(0.2));
    }
  }
}