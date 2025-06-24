import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ticket-booking',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatButtonModule, MatCardModule, FormsModule],
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

  // Extras
  extrasList: any[] = [];
  selectedExtrasAndata: (number | null)[] = [];
  selectedExtrasRitorno: (number | null)[] = [];

  totalPrice: number | null = null;
  bookingResult: any = null;
  bookingError: string | null = null;
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    // Recupera dati da history.state o da query params
    const state = history.state || {};
    const qp = this.route.snapshot.queryParamMap;
    this.flightId = state.flightId || qp.get('flightId');
    this.returnFlightId = state.returnFlightId || qp.get('returnFlightId');
    this.passengers = Number(state.passengers ?? qp.get('passengers') ?? 1);
    this.classType = state.classType || qp.get('classType') || 'ECONOMY';
    if (state.totalPrice !== undefined && state.totalPrice !== null) {
      this.totalPrice = state.totalPrice;
    }

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

    // Carica lista extra disponibili
    this.http.get<any[]>('/api/bookings/extras').subscribe(list => {
      this.extrasList = list || [];
    });

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
    this.http.get<any[]>(`/api/bookings/seats/${flightUUID}`).subscribe((seatsRes: any[]) => {
      // Normalizza il campo posizione (postion -> position)
      const seats = (seatsRes || []).map(seat => ({
        ...seat,
        position: seat.position || seat.postion || seat.label || seat.id
      }));
      if (type === 'andata') {
        this.seatsAndata = seats;
        this.selectedSeatsAndata = seats.slice(0, this.passengers).map(seat => seat.id);
        this.selectedExtrasAndata = Array(this.selectedSeatsAndata.length).fill(null);
      } else {
        this.seatsRitorno = seats;
        this.selectedSeatsRitorno = seats.slice(0, this.passengers).map(seat => seat.id);
        this.selectedExtrasRitorno = Array(this.selectedSeatsRitorno.length).fill(null);
      }
      this.calculateTotal();
    });
  }

  calculateTotal() {
    if (this.totalPrice !== null) return;
    let total = 0;
    if (this.priceAndata != null) total += this.priceAndata * this.selectedSeatsAndata.length;
    if (this.priceRitorno != null) total += this.priceRitorno * this.selectedSeatsRitorno.length;
    // Somma extra selezionati
    for (const extraId of this.selectedExtrasAndata) {
      if (extraId) {
        const extra = this.extrasList.find(e => e.id === extraId);
        if (extra) total += extra.price;
      }
    }
    for (const extraId of this.selectedExtrasRitorno) {
      if (extraId) {
        const extra = this.extrasList.find(e => e.id === extraId);
        if (extra) total += extra.price;
      }
    }
    this.totalPrice = total;
  }

  // Call this after selecting/deselecting a seat
  onSeatSelectionChange() {
    this.calculateTotal();
  }

  toggleSeat(seatId: number, type: 'andata' | 'ritorno') {
    if (type === 'andata') {
      const idx = this.selectedSeatsAndata.indexOf(seatId);
      if (idx > -1) {
        this.selectedSeatsAndata.splice(idx, 1);
      } else if (this.selectedSeatsAndata.length < this.passengers) {
        this.selectedSeatsAndata.push(seatId);
      }
    } else {
      const idx = this.selectedSeatsRitorno.indexOf(seatId);
      if (idx > -1) {
        this.selectedSeatsRitorno.splice(idx, 1);
      } else if (this.selectedSeatsRitorno.length < this.passengers) {
        this.selectedSeatsRitorno.push(seatId);
      }
    }
    this.onSeatSelectionChange();
  }

  getSeatPosition(type: 'andata' | 'ritorno', seatId: number): string {
    const arr = type === 'andata' ? this.seatsAndata : this.seatsRitorno;
    const found = arr.find(s => s.id === seatId);
    return found?.position || seatId;
  }

  onExtraChange(type: 'andata' | 'ritorno', idx: number) {
    this.totalPrice = null;
    this.calculateTotal();
  }

  onExtraCheckboxChange(type: 'andata' | 'ritorno', idx: number, extraId: number | null, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    if (type === 'andata') {
      if (checked) {
        this.selectedExtrasAndata[idx] = extraId;
      } else {
        this.selectedExtrasAndata[idx] = null;
      }
    } else {
      if (checked) {
        this.selectedExtrasRitorno[idx] = extraId;
      } else {
        this.selectedExtrasRitorno[idx] = null;
      }
    }
    this.totalPrice = null;
    this.calculateTotal();
  }

  // Chiamata di prenotazione
  bookTickets() {
    this.bookingError = null;
    const tickets: any[] = [];
    // Andata
    if (this.ticketUUIDAndata && this.selectedSeatsAndata.length === this.passengers) {
      for (let i = 0; i < this.selectedSeatsAndata.length; i++) {
        const seatId = this.selectedSeatsAndata[i];
        const extra = this.selectedExtrasAndata[i];
        tickets.push({ ticketUUID: this.ticketUUIDAndata, seatId, extras: extra ? [extra] : [] });
      }
    }
    // Ritorno
    if (this.ticketUUIDRitorno && this.selectedSeatsRitorno.length === this.passengers) {
      for (let i = 0; i < this.selectedSeatsRitorno.length; i++) {
        const seatId = this.selectedSeatsRitorno[i];
        const extra = this.selectedExtrasRitorno[i];
        tickets.push({ ticketUUID: this.ticketUUIDRitorno, seatId, extras: extra ? [extra] : [] });
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
