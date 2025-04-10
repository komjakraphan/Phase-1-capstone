import { Component } from '@angular/core';
import { Meeting } from '../meeting';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meeting-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './meeting-form.component.html',
  styleUrl: './meeting-form.component.css'
})
export class MeetingFormComponent {

  meetingList: Meeting [] =[
    { id: 1,
      topic: `Susan's performance`,
      numPeople: 4,
      date: "2025-06-01T08:30"
    },
    { id: 2,
      topic: `Fire Gary`,
      numPeople: 2,
      date: "2025-06-02T08:30"
    }
  ]

  newMeeting: Meeting ={
    id: 0,
    topic: '',
    numPeople: 0,
    date: '',
  }

  addMeeting() {
    const tempMeeting: Meeting = {
      id: this.meetingList.length + 1,
      topic: this.newMeeting.topic,
      numPeople: this.newMeeting.numPeople,
      date: this.newMeeting.date
    }
    this.meetingList.push(tempMeeting);
    this.newMeeting.topic = ''
    this.newMeeting.numPeople = 0
    this.newMeeting.date = ''
  }
}
