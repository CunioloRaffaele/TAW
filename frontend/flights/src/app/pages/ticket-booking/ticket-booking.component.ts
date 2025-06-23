import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-ticket-booking',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatButtonModule, MatCardModule, MatIcon],
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent implements OnInit {
  flightId: string | null = null;
  returnFlightId: string | null = null;
  passengers: number = 1;
  classType: string = 'ECONOMY';

  // Ticket info
  ticketsAndata: any[] = [];
  ticketsRitorno: any[] = [];
  priceAndata: number | null = null;
  priceRitorno: number | null = null;
  ticketUUIDAndata: string | null = null;
  ticketUUIDRitorno: string | null = null;

  // Seats
  seatsAndata: any[] = [];
  seatsRitorno: any[] = [];
  selectedSeatsAndata: number[] = [];
  selectedSeatsRitorno: number[] = [];

  totalPrice: number | null = null;
  bookingResult: any = null;
  bookingError: string | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    // Recupera dati da history.state o da query params
    const state = history.state || {};
    const qp = this.route.snapshot.queryParamMap;
    this.flightId = state.flightId || qp.get('flightId');
    this.returnFlightId = state.returnFlightId || qp.get('returnFlightId');
    this.passengers = Number(state.passengers ?? qp.get('passengers') ?? 1);
    this.classType = state.classType || qp.get('classType') || 'ECONOMY';

    // LOG DATI
    console.log('[TicketBooking] flightId:', this.flightId);
    console.log('[TicketBooking] returnFlightId:', this.returnFlightId);
    console.log('[TicketBooking] passengers:', this.passengers, ' (typeof:', typeof this.passengers, ')');
    console.log('[TicketBooking] classType:', this.classType);
    console.log('[TicketBooking] state:', state);
    console.log('[TicketBooking] queryParams:', Object.fromEntries(qp.keys.map(k => [k, qp.get(k)])));

    // Se mancano dati fondamentali mostra errore
    if (!this.flightId && !this.returnFlightId) {
      this.bookingError = 'Dati di prenotazione mancanti. Torna alla ricerca voli.';
      return;
    }

    if (this.flightId) {
      this.loadTicketAndSeats(this.flightId, 'andata');
    }
    if (this.returnFlightId) {
      this.loadTicketAndSeats(this.returnFlightId, 'ritorno');
    }
  }

  loadTicketAndSeats(flightUUID: string, type: 'andata' | 'ritorno') {
    // 1. Carica i ticket disponibili per la classe scelta
    this.http.get(`/api/bookings/tickets/${flightUUID}`, { responseType: 'text' }).subscribe(ticketResRaw => {
      let ticketRes: any[] = [];
      try {
        ticketRes = ticketResRaw ? JSON.parse(ticketResRaw) : [];
      } catch (e) {
        ticketRes = [];
      }
      const found = ticketRes.find(t => (t.type || '').toUpperCase() === this.classType.toUpperCase());
      if (type === 'andata') {
        this.ticketsAndata = ticketRes;
        if (found) {
          this.priceAndata = found.price;
          this.ticketUUIDAndata = found.code;
        }
      } else {
        this.ticketsRitorno = ticketRes;
        if (found) {
          this.priceRitorno = found.price;
          this.ticketUUIDRitorno = found.code;
        }
      }
      this.calculateTotal();
    });
    // 2. Carica i posti disponibili
    this.http.get(`/api/bookings/seats/${flightUUID}`, { responseType: 'text' }).subscribe(seatsResRaw => {
      let seatsRes: any[] = [];
      try {
        seatsRes = seatsResRaw ? JSON.parse(seatsResRaw) : [];
      } catch (e) {
        seatsRes = [];
      }
      if (type === 'andata') this.seatsAndata = seatsRes;
      else this.seatsRitorno = seatsRes;
    });
  }

  calculateTotal() {
    let total = 0;
    if (this.priceAndata != null) total += this.priceAndata * this.selectedSeatsAndata.length;
    if (this.priceRitorno != null) total += this.priceRitorno * this.selectedSeatsRitorno.length;
    this.totalPrice = total;
  }

  // Call this after selecting/deselecting a seat
  onSeatSelectionChange() {
    this.calculateTotal();
  }

  // Chiamata di prenotazione
  bookTickets() {
    this.bookingError = null;
    const tickets: any[] = [];
    // Andata
    if (this.ticketUUIDAndata && this.selectedSeatsAndata.length === this.passengers) {
      for (const seatId of this.selectedSeatsAndata) {
        tickets.push({ ticketUUID: this.ticketUUIDAndata, seatId, extras: [] });
      }
    }
    // Ritorno
    if (this.ticketUUIDRitorno && this.selectedSeatsRitorno.length === this.passengers) {
      for (const seatId of this.selectedSeatsRitorno) {
        tickets.push({ ticketUUID: this.ticketUUIDRitorno, seatId, extras: [] });
      }
    }
    if (tickets.length === 0) {
      this.bookingError = 'Seleziona i posti per tutti i passeggeri.';
      return;
    }
    this.http.post<any>('/api/bookings/trips', { tickets }).subscribe({
      next: res => { this.bookingResult = res; },
      error: err => { this.bookingError = err?.error?.message || 'Errore nella prenotazione.'; }
    });
  }
}
