import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-flights-management',
    standalone: true,
  imports: [CommonModule,
    MatCardModule,
    MatButtonModule],
  templateUrl: './flights-management.component.html',
  styleUrl: './flights-management.component.css'
})
export class FlightsManagementComponent {

}
