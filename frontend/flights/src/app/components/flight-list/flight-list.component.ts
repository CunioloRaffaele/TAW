import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flight-list',
  standalone: true,
  imports: [FlightCardComponent, CommonModule],
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnChanges {
  @Input() flights: any[] = [];
  @Output() hoverRoute = new EventEmitter<any>();
  @Output() leaveRoute = new EventEmitter<void>();
  @Input() classType: string = 'ECONOMY';
  @Input() passengers: number = 1;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['passengers']) {
      console.log('[FlightList] passengers changed:', this.passengers, '(typeof:', typeof this.passengers, ')');
    }
    if (changes['classType']) {
      console.log('[FlightList] classType changed:', this.classType);
    }
  }
}
