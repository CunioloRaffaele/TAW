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

  totalPrice: number | null = null;
  bookingResult: any = null;
  bookingError: string | null = null;
  loading: boolean = false;

  // Extra services
  extraBaggageSelected: boolean = false;
  airportLoungeSelected: boolean = false;
  globalExtra: 'baggage' | 'lounge' | 'none' = 'none';

  baseTotal: number = 0;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    // Recupera dati da history.state o da query params
    const state = history.state || {};
    const qp = this.route.snapshot.queryParamMap;
    this.flightId = state.flightId || qp.get('flightId');
    this.returnFlightId = state.returnFlightId || qp.get('returnFlightId');
    this.passengers = Number(state.passengers ?? qp.get('passengers') ?? 1);
    this.classType = state.classType || qp.get('classType') || 'ECONOMY';

    // Se arrivi dalla selezione voli, salva il prezzo base
    if (state.totalPrice !== undefined && state.totalPrice !== null) {
      this.baseTotal = state.totalPrice;
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

    // Seleziona solo gli extra globali disponibili
    this.http.get<any[]>('/api/bookings/extras').subscribe(list => {
      this.extraBaggageSelected = list?.some(e => e.id === 1) || false;
      this.airportLoungeSelected = list?.some(e => e.id === 2) || false;
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
    this.http.get<any[]>(`/api/bookings/tickets/${flightUUID}`).subscribe(ticketRes => {
      const found = ticketRes?.find(t => (t.type || '').toUpperCase() === this.classType.toUpperCase());
      if (type === 'andata') {
        this.ticketsAndata = ticketRes || [];
        if (found) {
          this.priceAndata = found.price;
          this.ticketUUIDAndata = found.code;
        }
      } else {
        this.ticketsRitorno = ticketRes || [];
        if (found) {
          this.priceRitorno = found.price;
          this.ticketUUIDRitorno = found.code;
        }
      }
      this.updateTotalIfReady();
    });
    // 2. Carica i posti disponibili
    this.http.get<any[]>(`/api/bookings/seats/${flightUUID}`).subscribe((seatsRes: any[] = []) => {
      const seats = (seatsRes || []).map(seat => ({
        ...seat,
        position: seat.position || seat.postion || seat.label || seat.id
      }));
      if (type === 'andata') {
        this.seatsAndata = seats;
        this.selectedSeatsAndata = seats.slice(0, this.passengers).map(seat => seat.id);
      } else {
        this.seatsRitorno = seats;
        this.selectedSeatsRitorno = seats.slice(0, this.passengers).map(seat => seat.id);
      }
      this.calculateTotal();
    });
  }

  updateTotalIfReady() {
    // Calcola il totale solo se almeno uno dei prezzi è stato caricato
    if ((this.flightId && this.priceAndata != null) || (this.returnFlightId && this.priceRitorno != null)) {
      this.calculateTotal();
    }
  }

  // Ogni volta che cambiano extra o posti, chiama questa funzione:
  calculateTotal() {
    // Usa sempre il prezzo base come partenza
    let total = this.baseTotal;

    // Extra globali
    if (this.extraBaggageSelected) total += 50 * this.passengers;
    if (this.airportLoungeSelected) total += 75 * this.passengers;

    this.totalPrice = total;
  }

  // Se cambi i posti o i prezzi dei voli, aggiorna anche il base:
  updateBaseTotal() {
    let base = 0;
    if (this.priceAndata != null) base += this.priceAndata * this.selectedSeatsAndata.length;
    if (this.priceRitorno != null) base += this.priceRitorno * this.selectedSeatsRitorno.length;
    this.baseTotal = base;
    this.calculateTotal();
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

  // Chiamata di prenotazione
  async bookTickets() {
    this.bookingError = null;
    this.bookingResult = null;
    const apiUrl = 'http://129.152.7.218:3000';
    let selectedExtra: number | null = null;
    if (this.globalExtra === 'baggage') selectedExtra = 1;
    if (this.globalExtra === 'lounge') selectedExtra = 2;

    try {
      // Recupera ticket e seats per andata
      let ticketAndata: any = null, seatsAndata: any[] = [];
      if (this.flightId) {
        const ticketRes: any[] = (await this.http.get<any[]>(`${apiUrl}/api/bookings/tickets/${this.flightId}`).toPromise()) || [];
        ticketAndata = ticketRes.find(t => (t.type || '').toUpperCase() === this.classType.toUpperCase());
        seatsAndata = (await this.http.get<any[]>(`${apiUrl}/api/bookings/seats/${this.flightId}`).toPromise()) || [];
      }
      // Recupera ticket e seats per ritorno
      let ticketRitorno: any = null, seatsRitorno: any[] = [];
      if (this.returnFlightId) {
        const ticketRes: any[] = (await this.http.get<any[]>(`${apiUrl}/api/bookings/tickets/${this.returnFlightId}`).toPromise()) || [];
        ticketRitorno = ticketRes.find(t => (t.type || '').toUpperCase() === this.classType.toUpperCase());
        seatsRitorno = (await this.http.get<any[]>(`${apiUrl}/api/bookings/seats/${this.returnFlightId}`).toPromise()) || [];
      }

      // Verifica disponibilità posti
      if ((this.flightId && seatsAndata.length < this.passengers) ||
          (this.returnFlightId && seatsRitorno.length < this.passengers)) {
        this.bookingError = 'Non ci sono abbastanza posti disponibili.';
        return;
      }

      const results: any[] = [];
      for (let i = 0; i < this.passengers; i++) {
        const tickets: any[] = [];
        if (this.flightId && ticketAndata && seatsAndata[i]) {
          tickets.push({
            ticketUUID: ticketAndata.code,
            seatId: seatsAndata[i].id,
            extras: selectedExtra ? [selectedExtra] : []
          });
        }
        if (this.returnFlightId && ticketRitorno && seatsRitorno[i]) {
          tickets.push({
            ticketUUID: ticketRitorno.code,
            seatId: seatsRitorno[i].id,
            extras: selectedExtra ? [selectedExtra] : []
          });
        }
        // Fai la POST per ogni passeggero
        try {
          // eslint-disable-next-line no-await-in-loop
          const res = await this.http.post<any>(
            `${apiUrl}/api/bookings/trips`,
            { tickets },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt_token')}`,
              },
            }
          ).toPromise();
          results.push({ success: true, data: res });
        } catch (err: any) {
          results.push({ success: false, error: err?.error?.message || 'Errore nella prenotazione.' });
        }
      }

      this.bookingResult = results;
      if (results.some(r => !r.success)) {
        this.bookingError = 'Alcune prenotazioni non sono andate a buon fine.';
      }
    } catch (err: any) {
      this.bookingError = 'Errore nel recupero dei posti o dei ticket.';
    }
  }

  selectGlobalExtra(type: 'baggage' | 'lounge' | 'none') {
    this.extraBaggageSelected = type === 'baggage';
    this.airportLoungeSelected = type === 'lounge';
    this.globalExtra = type; // Aggiorna anche il globalExtra!
    this.calculateTotal();
  }
}
