import { Component } from '@angular/core';
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
  flights: any[] = [];
  loading = false;
  error: string | null = null;
  searchData: any;

  constructor(private http: HttpClient, private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.searchData = nav?.extras?.state?.['searchData'];
  }

  ngOnInit() {
    if (this.searchData) {
      if (this.searchData.tripType === 'roundtrip') {
        this.loadRoundTripFlights();
      } else {
        this.loadFlights();
      }
    }
  }

  loadFlights() {
    this.loading = true;
    this.error = null;

    const body = {
      routes: [{
        departure: this.searchData.from,
        destination: this.searchData.to
      }],
      searchStartDateLOCAL: this.searchData.departureDate,
      searchEndDateLOCAL: this.searchData.returnDate || this.searchData.departureDate,
      passengers: this.searchData.passengers,
      classType: this.searchData.classType
    };

    this.http.post<any>(`${environment.apiUrl}/api/navigate/flights/search`, body)
      .subscribe({
        next: (res) => {
          console.log('Risposta voli:', res.flights);

          // Se roundtrip e ci sono due voli, raggruppali in un array
          if (this.searchData.tripType === 'roundtrip' && res.flights.length === 2) {
            this.flights = [ [res.flights[0], res.flights[1]] ];
          } else {
            this.flights = res.flights || [];
          }

          this.loading = false;
        },
        error: (err) => {
          this.error = 'Errore nel caricamento dei voli';
          this.loading = false;
        }
      });
  }

  async loadRoundTripFlights() {
    console.log('Chiamo loadRoundTripFlights con:', this.searchData);
    this.loading = true;
    this.error = null;

    const addOneDay = (dateStr: string) => {
      const d = new Date(dateStr);
      d.setDate(d.getDate() + 1);
      return `${d.getFullYear()}-${(d.getMonth()+1).toString().padStart(2,'0')}-${d.getDate().toString().padStart(2,'0')} 00:00:00`;
    };

    // Richiesta andata
    const bodyAndata = {
      routes: [{ departure: this.searchData.from, destination: this.searchData.to }],
      searchStartDateLOCAL: this.searchData.departureDate,
      searchEndDateLOCAL: addOneDay(this.searchData.departureDate),
      passengers: this.searchData.passengers,
      classType: this.searchData.classType
    };

    // Richiesta ritorno
    const bodyRitorno = {
      routes: [{ departure: this.searchData.to, destination: this.searchData.from }],
      searchStartDateLOCAL: this.searchData.returnDate,
      searchEndDateLOCAL: addOneDay(this.searchData.returnDate),
      passengers: this.searchData.passengers,
      classType: this.searchData.classType
    };

    try {
      const [andataRes, ritornoRes] = await Promise.all([
        this.http.post<any>(`${environment.apiUrl}/api/navigate/flights/search`, bodyAndata).toPromise(),
        this.http.post<any>(`${environment.apiUrl}/api/navigate/flights/search`, bodyRitorno).toPromise()
      ]);

      if (andataRes.flights.length > 0 && ritornoRes.flights.length > 0) {
        // Prendi il primo volo di andata e il primo di ritorno
        this.flights = [[andataRes.flights[0], ritornoRes.flights[0]]];
      } else {
        this.flights = [];
        this.error = 'Nessun volo andata e ritorno disponibile';
      }
    } catch (err) {
      this.error = 'Errore nel caricamento dei voli';
    } finally {
      this.loading = false;
    }
  }
}