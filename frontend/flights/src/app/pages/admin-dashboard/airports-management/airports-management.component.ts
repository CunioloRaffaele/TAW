import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-airports-management',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './airports-management.component.html',
  styleUrls: ['./airports-management.component.css']
})
export class AirportsManagementComponent { }
