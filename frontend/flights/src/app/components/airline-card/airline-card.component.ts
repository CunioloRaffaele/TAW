import { Component, input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-airline-card',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './airline-card.component.html',
  styleUrls: ['./airline-card.component.css']
})
export class AirlineCardComponent {
  name = input('default name');
  country = input('default country');
  motto = input('default motto');

  @Output() deleteAirline = new EventEmitter<void>();

  showDeleteConfirm = false;

  confirmDelete() {
    this.deleteAirline.emit();
    this.showDeleteConfirm = false;
  }
}