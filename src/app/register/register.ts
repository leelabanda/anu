import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {
  constructor(private router:Router){};
  fullName = '';
  email = '';
  phone = '';
  password = '';
  confirmPassword = '';

  showPassword = false;

  register() {

    if (
      this.fullName === '' ||
      this.email === '' ||
      this.phone === '' ||
      this.password === '' ||
      this.confirmPassword === ''
    ) {

      alert('Please fill all fields.');
      return;
    }

    if (this.password !== this.confirmPassword) {

      alert('Passwords do not match.');
      return;
    }

    alert('🎉 Registration Successful! Welcome to ANU 3D Printing.');

    this.fullName = '';
    this.email = '';
    this.phone = '';
    this.password = '';
    this.confirmPassword = '';
    this.router.navigate(['/home']);
  }
  

}