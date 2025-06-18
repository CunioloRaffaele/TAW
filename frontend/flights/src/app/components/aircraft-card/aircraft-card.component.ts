import { Component, input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-aircraft-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './aircraft-card.component.html',
  styleUrl: './aircraft-card.component.css'
})
export class AircraftCardComponent {
  id = input('')
  model = input('')
  nSeats = input('')

  @Output() deleteAircraft = new EventEmitter<number>();

  showDeleteConfirm = false;

  confirmDelete() {
    this.deleteAircraft.emit(Number(this.id()));
    this.showDeleteConfirm = false;
  }
}
