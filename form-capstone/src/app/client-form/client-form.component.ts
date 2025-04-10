import { Component } from '@angular/core';
import { Client } from '../client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-form',
  imports: [CommonModule],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})
export class ClientFormComponent {

    clientList: Client [] = [
      { id: 0,
        name: 'john smith',
        email: 'john@email.com',
        address: '1234 address st city state',
        password: 'abc1234'
      }
    ]
}
