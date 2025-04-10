import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';
import { MeetingFormComponent } from './meeting-form/meeting-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ClientFormComponent, MeetingFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form-capstone';
}
