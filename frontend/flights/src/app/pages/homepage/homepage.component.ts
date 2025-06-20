import { Component } from '@angular/core';
import { FlightSearchComponent } from '../../components/flight-search/flight-search.component'; 
import { MapComponent } from '../../components/map/map.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    FlightSearchComponent,
    MapComponent,
    RouterModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent { }