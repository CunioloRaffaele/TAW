import { Component, input, signal, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-card',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  name = input('default name');
  email = input('default email');
  password = input('default password');

  @Output() deleteUser = new EventEmitter<void>();
  
  showDeleteConfirm = false;
  
  confirmDelete() {
    this.deleteUser.emit();
    this.showDeleteConfirm = false;
  }
}
