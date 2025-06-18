import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-aircrafts-management',
    standalone: true,
  imports: [CommonModule,
    MatCardModule,
    MatButtonModule],
  templateUrl: './aircrafts-management.component.html',
  styleUrl: './aircrafts-management.component.css'
})
export class AircraftsManagementComponent {

}
