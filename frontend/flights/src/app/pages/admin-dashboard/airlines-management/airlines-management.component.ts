import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-airlines-management',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './airlines-management.component.html',
  styleUrls: ['./airlines-management.component.css']
})
export class AirlinesManagementComponent { }
