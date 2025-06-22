import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-map-routing',
  imports: [],
  templateUrl: './map-routing.component.html',
  styleUrl: './map-routing.component.css'
})
export class MapRoutingComponent implements AfterViewInit {
  private map!: L.Map;

  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    this.map = L.map('map').setView([45.4642, 9.19], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.loadMap();
  }

  private loadMap(): void {
    // Set map bounds
    const southWest = L.latLng(-60, -170);
    const northEast = L.latLng(85, 190);
    const bounds = L.latLngBounds(southWest, northEast);

    this.map.setMaxBounds(bounds);
    this.map.on('drag', () => {
      this.map.panInsideBounds(bounds, { animate: false });
    });
    this.map.options.minZoom = 2;
  }

  displayRoute(airports: Array<{ lat: number, lan: number, name: string, city: string, country: string }>): void {
    if (!this.map || !airports || airports.length === 0) return;

    // Remove existing layers except the tile layer
    this.map.eachLayer(layer => {
      if ((layer as any)._url !== 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png') {
        this.map.removeLayer(layer);
      }
    });

    const latlngs: L.LatLngExpression[] = [];

    airports.forEach(airport => {
      if (airport.lat && airport.lan) {
        latlngs.push([airport.lat, airport.lan]);
        L.marker([airport.lat, airport.lan])
          .addTo(this.map)
          .bindPopup(`<b>${airport.name}</b><br>${airport.city}, ${airport.country}`);
      }
    });

    if (latlngs.length > 1) {
      L.polyline(latlngs, { color: 'blue', weight: 4 }).addTo(this.map);
      this.map.fitBounds(latlngs as L.LatLngBoundsExpression, { padding: [40, 40] });
    } else if (latlngs.length === 1) {
      this.map.setView(latlngs[0], 8);
    }
  }
}
