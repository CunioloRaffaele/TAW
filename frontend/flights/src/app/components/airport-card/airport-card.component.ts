import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-airport-card',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './airport-card.component.html',
  styleUrls: ['./airport-card.component.css']
})
export class AirportCardComponent {
  name = input('default name');
  city = input('default city');
  country = input('default country');
  timeZone = input(0);
}