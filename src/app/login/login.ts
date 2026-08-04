import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  showPassword = false;

  constructor(private router: Router) {}

  login() {
    alert('Login Successful!');
    this.router.navigate(['/home']);
  }

}