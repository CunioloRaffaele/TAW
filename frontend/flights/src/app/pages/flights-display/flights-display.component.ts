import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { FlightListComponent } from '../../components/flight-list/flight-list.component';
import { MapRoutingComponent } from '../../components/map-routing/map-routing.component';

@Component({
  selector: 'app-flights-display',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FlightListComponent,
    MapRoutingComponent
],
  templateUrl: './flights-display.component.html',
  styleUrls: ['./flights-display.component.css']
})
export class FlightsDisplayComponent {
  @ViewChild('mapRouting') mapRouting!: MapRoutingComponent;

  flights: any[] = [];
  loading = false;
  error: string | null = null;
  searchData: any;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.searchData = history.state.searchData;
    console.log('[FlightsDisplay] searchData:', this.searchData);
    if (this.searchData) {
      console.log('[FlightsDisplay] passengers:', this.searchData.passengers, '(typeof:', typeof this.searchData.passengers, ')');
      if (this.searchData.tripType === 'roundtrip') {
        this.loadRoundTripFlights();
      } else {
        this.loadFlights();
      }
    }
  }

  addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return `${d.getFullYear()}-${(d.getMonth()+1).toString().padStart(2,'0')}-${d.getDate().toString().padStart(2,'0')} 00:00:00`;
}

  async loadFlights() {
    this.loading = true;
    this.error = null;

    try {
      const pathRes = await this.http.get<any>(
        `${environment.apiUrl}/api/navigate/routes/path?from=${this.searchData.from}&to=${this.searchData.to}`
      ).toPromise();

      if (!pathRes || !pathRes.steps || !Array.isArray(pathRes.steps)) {
        this.error = 'Nessun percorso trovato tra questi aeroporti';
        this.flights = [];
        this.loading = false;
        return;
      }

      const steps = pathRes.steps;
      const stepsCount = pathRes.stepsCount;

      if (this.searchData.directOnly) {
        // SOLO voli diretti (stepsCount === 2)
        if (stepsCount === 2) {
          const body = {
            routes: [{
              departure: steps[0],
              destination: steps[1]
            }],
            searchStartDateLOCAL: this.searchData.departureDate,
            searchEndDateLOCAL: this.addDays(this.searchData.departureDate, 180), // 6 mesi
            passengers: this.searchData.passengers,
            classType: this.searchData.classType
          };
          const res = await this.http.post<any>(`${environment.apiUrl}/api/navigate/flights/search`, body).toPromise();
          if (res.flights && res.flights.length > 0) {
            this.flights = res.flights.map((f: any) => [Array.isArray(f) ? f : [f]]);
          } else {
            this.flights = [];
            this.error = 'Nessun volo disponibile';
          }
        } else {
          // Se non è diretto, non mostrare nulla
          this.flights = [];
          this.error = 'Nessun volo diretto disponibile per questa tratta';
        }
      } else {
        // Mostra voli diretti (stepsCount === 2) e con uno scalo (stepsCount === 3)
        if (stepsCount === 2) {
          const body = {
            routes: [{
              departure: steps[0],
              destination: steps[1]
            }],
            searchStartDateLOCAL: this.searchData.departureDate,
            searchEndDateLOCAL: this.addDays(this.searchData.departureDate, 180), 
            passengers: this.searchData.passengers,
            classType: this.searchData.classType
          };
          const res = await this.http.post<any>(`${environment.apiUrl}/api/navigate/flights/search`, body).toPromise();
          if (res.flights && res.flights.length > 0) {
            this.flights = res.flights.map((f: any) => [Array.isArray(f) ? f : [f]]);
          } else {
            this.flights = [];
            this.error = 'Nessun volo disponibile';
          }
        } else if (stepsCount === 3) {
          const body = {
            routes: [
              { departure: steps[0], destination: steps[1] },
              { departure: steps[1], destination: steps[2] }
            ],
            searchStartDateLOCAL: this.searchData.departureDate,
            searchEndDateLOCAL: this.addDays(this.searchData.departureDate, 180),
            passengers: this.searchData.passengers,
            classType: this.searchData.classType
          };
          const res = await this.http.post<any>(`${environment.apiUrl}/api/navigate/flights/search`, body).toPromise();
          if (res.flights && res.flights.length > 0) {
            this.flights = res.flights.map((f: any) => [Array.isArray(f) ? f : [f]]);
          } else {
            this.flights = [];
            this.error = 'Nessun volo disponibile';
          }
        } else {
          // Più di uno scalo: non mostrare voli
          this.flights = [];
          this.error = 'Nessun volo disponibile con massimo uno scalo';
        }
      }
    } catch (err) {
      this.error = 'Errore nel caricamento dei voli';
      this.flights = [];
    } finally {
      this.loading = false;
    }
  }

  async loadRoundTripFlights() {
    this.loading = true;
    this.error = null;

    const addDays = (dateStr: string, days: number): string => {
      const d = new Date(dateStr);
      d.setDate(d.getDate() + days);
      return `${d.getFullYear()}-${(d.getMonth()+1).toString().padStart(2,'0')}-${d.getDate().toString().padStart(2,'0')} 00:00:00`;
    };

    try {
      // 1. Chiedi la rotta per l'andata
      const pathAndata = await this.http.get<any>(
        `${environment.apiUrl}/api/navigate/routes/path?from=${this.searchData.from}&to=${this.searchData.to}`
      ).toPromise();

      // 2. Chiedi la rotta per il ritorno
      const pathRitorno = await this.http.get<any>(
        `${environment.apiUrl}/api/navigate/routes/path?from=${this.searchData.to}&to=${this.searchData.from}`
      ).toPromise();

      // Controlli per l'andata
      const stepsA = pathAndata?.steps;
      const stepsCountA = pathAndata?.stepsCount;
      // Controlli per il ritorno
      const stepsR = pathRitorno?.steps;
      const stepsCountR = pathRitorno?.stepsCount;

      // Se solo voli diretti mostra solo se entrambi sono diretti
      if (this.searchData.directOnly) {
        if (stepsCountA === 2 && stepsCountR === 2) {
          const bodyAndata = {
            routes: [{ departure: stepsA[0], destination: stepsA[1] }],
            searchStartDateLOCAL: this.searchData.departureDate,
            searchEndDateLOCAL: addDays(this.searchData.departureDate, 180),
            passengers: this.searchData.passengers,
            classType: this.searchData.classType
          };
          const bodyRitorno = {
            routes: [{ departure: stepsR[0], destination: stepsR[1] }],
            searchStartDateLOCAL: this.searchData.returnDate,
            searchEndDateLOCAL: addDays(this.searchData.returnDate, 180),
            passengers: this.searchData.passengers,
            classType: this.searchData.classType
          };
          const [andataRes, ritornoRes] = await Promise.all([
            this.http.post<any>(`${environment.apiUrl}/api/navigate/flights/search`, bodyAndata).toPromise(),
            this.http.post<any>(`${environment.apiUrl}/api/navigate/flights/search`, bodyRitorno).toPromise()
          ]);
          if (andataRes.flights.length > 0 && ritornoRes.flights.length > 0) {
            this.flights = [];
            for (const andata of andataRes.flights) {
              for (const ritorno of ritornoRes.flights) {
                // Ogni andata e ritorno può essere un oggetto (diretto) o un array (multi-leg)
                this.flights.push([
                  Array.isArray(andata) ? andata : [andata],
                  Array.isArray(ritorno) ? ritorno : [ritorno]
                ]);
              }
            }
          } else {
            this.flights = [];
            this.error = 'Nessun volo andata e ritorno disponibile';
          }
        } else {
          this.flights = [];
          this.error = 'Nessun volo diretto andata e ritorno disponibile';
        }
      } else {
        // Mostra solo se entrambi sono diretti o con uno scalo (stepsCount === 2 o 3)
        if (
          (stepsCountA === 2 || stepsCountA === 3) &&
          (stepsCountR === 2 || stepsCountR === 3)
        ) {
          const bodyAndata = {
            routes: stepsCountA === 2
              ? [{ departure: stepsA[0], destination: stepsA[1] }]
              : [
                  { departure: stepsA[0], destination: stepsA[1] },
                  { departure: stepsA[1], destination: stepsA[2] }
                ],
            searchStartDateLOCAL: this.searchData.departureDate,
            searchEndDateLOCAL: addDays(this.searchData.departureDate, 180),
            passengers: this.searchData.passengers,
            classType: this.searchData.classType
          };
          const bodyRitorno = {
            routes: stepsCountR === 2
              ? [{ departure: stepsR[0], destination: stepsR[1] }]
              : [
                  { departure: stepsR[0], destination: stepsR[1] },
                  { departure: stepsR[1], destination: stepsR[2] }
                ],
            searchStartDateLOCAL: this.searchData.returnDate,
            searchEndDateLOCAL: addDays(this.searchData.returnDate, 180),
            passengers: this.searchData.passengers,
            classType: this.searchData.classType
          };
          const [andataRes, ritornoRes] = await Promise.all([
            this.http.post<any>(`${environment.apiUrl}/api/navigate/flights/search`, bodyAndata).toPromise(),
            this.http.post<any>(`${environment.apiUrl}/api/navigate/flights/search`, bodyRitorno).toPromise()
          ]);
          if (andataRes.flights.length > 0 && ritornoRes.flights.length > 0) {
            this.flights = [];
            for (const andata of andataRes.flights) {
              for (const ritorno of ritornoRes.flights) {
                // Ogni andata e ritorno può essere un oggetto (diretto) o un array (multi-leg)
                this.flights.push([
                  Array.isArray(andata) ? andata : [andata],
                  Array.isArray(ritorno) ? ritorno : [ritorno]
                ]);
              }
            }
          } else {
            this.flights = [];
            this.error = 'Nessun volo andata e ritorno disponibile';
          }
        } else {
          this.flights = [];
          this.error = 'Nessun volo disponibile con massimo uno scalo per andata e ritorno';
        }
      }
    } catch (err) {
      this.error = 'Errore nel caricamento dei voli';
      this.flights = [];
    } finally {
      this.loading = false;
    }
  }

  onHoverRoute(flight: any) {
    // Estrai gli aeroporti dalla struttura del volo
    const airports = this.extractAirportsFromFlight(flight);
    if (airports && this.mapRouting) {
      this.mapRouting.displayRoute(airports);
    }
  }

  onLeaveRoute() {
    if (this.mapRouting) {
      this.mapRouting.displayRoute([]); // Svuota la mappa o resetta la rotta
    }
  }

  extractAirportsFromFlight(flight: any): any[] {
    // Per voli diretti
    if (!Array.isArray(flight)) {
      return [
        {
          lat: flight.routes.airports_routes_departureToairports.lat,
          lan: flight.routes.airports_routes_departureToairports.lan,
          name: flight.routes.airports_routes_departureToairports.name,
          city: flight.routes.airports_routes_departureToairports.city,
          country: flight.routes.airports_routes_departureToairports.country
        },
        {
          lat: flight.routes.airports_routes_destinationToairports.lat,
          lan: flight.routes.airports_routes_destinationToairports.lan,
          name: flight.routes.airports_routes_destinationToairports.name,
          city: flight.routes.airports_routes_destinationToairports.city,
          country: flight.routes.airports_routes_destinationToairports.country
        }
      ];
    }
    // Per voli multileg
    const airports = [];
    for (let i = 0; i < flight.length; i++) {
      const leg = flight[i];
      if (i === 0) {
        airports.push({
          lat: leg.routes.airports_routes_departureToairports.lat,
          lan: leg.routes.airports_routes_departureToairports.lan,
          name: leg.routes.airports_routes_departureToairports.name,
          city: leg.routes.airports_routes_departureToairports.city,
          country: leg.routes.airports_routes_departureToairports.country
        });
      }
      airports.push({
        lat: leg.routes.airports_routes_destinationToairports.lat,
        lan: leg.routes.airports_routes_destinationToairports.lan,
        name: leg.routes.airports_routes_destinationToairports.name,
        city: leg.routes.airports_routes_destinationToairports.city,
        country: leg.routes.airports_routes_destinationToairports.country
      });
    }
    return airports;
  }
}