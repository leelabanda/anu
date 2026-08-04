import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacts.html',
  styleUrls: ['./contacts.css']
})
export class ContactComponent {

  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  sendMessage() {

    if (
      this.contact.name === '' ||
      this.contact.email === '' ||
      this.contact.subject === '' ||
      this.contact.message === ''
    ) {
      alert('Please fill all fields');
      return;
    }

    alert('Message Sent Successfully');

    console.log(this.contact);
  }

}