import { Component } from '@angular/core';
import { Client } from '../client';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})
export class ClientFormComponent {

    clientList: Client [] = [
      { id: 0,
        name: 'John Smith',
        email: 'john@email.com',
        address: '1234 address st city state',
        password: 'abc1234'
      },
      { id: 0,
        name: 'Carol June',
        email: 'john@email.com',
        address: '1234 address st city state',
        password: 'abc1234'
      }
    ]

    newClient: Client = {
      id: 0,
      name: '',
      email: '',
      address: '',
      password: ''
    };

    addClient() {
      const tempClient: Client = {
        id: this.clientList.length + 1,
        name: this.newClient.name,
        email: this.newClient.email,
        address: this.newClient.address,
        password: this.newClient.password
      }
      this.clientList.push(tempClient);
    };
}
