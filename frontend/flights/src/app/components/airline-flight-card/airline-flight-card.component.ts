import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-airline-flight-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './airline-flight-card.component.html',
  styleUrls: ['./airline-flight-card.component.css']
})
export class AirlineFlightCardComponent {
  flight = input<any>();
}