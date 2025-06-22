import { Component, Input } from '@angular/core';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flight-list',
  standalone: true,
  imports: [FlightCardComponent, CommonModule],
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent {
  @Input() flights: any[] = [];
}
