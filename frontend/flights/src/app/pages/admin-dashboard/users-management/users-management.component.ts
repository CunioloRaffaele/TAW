import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { UserCardComponent } from '../../../components/user-card/user-card.component';

@Component({
  selector: 'app-users-management',
  standalone: true,
  imports: [CommonModule, MatCardModule, UserCardComponent],
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})
export class UsersManagementComponent { }
