import {
  Component,
  Inject,
  OnInit,
  PLATFORM_ID
} from '@angular/core';

import { Router } from '@angular/router';

import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-profile',

  standalone: true,

  imports: [],

  templateUrl: './profile.html',

  styleUrl: './profile.css'
})
export class Profile implements OnInit {

  user: any = {

    name: '',

    email: '',

    phone: '',

    address: '',

    city: '',

    state: '',

    username: ''

  };


  constructor(

    private router: Router,

    @Inject(PLATFORM_ID)

    private platformId: Object

  ) {}


  // ==========================================
  // ON INIT
  // ==========================================

  ngOnInit(): void {

    this.loadProfile();

  }


  // ==========================================
  // LOAD PROFILE
  // ==========================================

  loadProfile(): void {

    // Prevent localStorage error during SSR

    if (!isPlatformBrowser(this.platformId)) {

      return;

    }


    const name =
      localStorage.getItem('name');

    const username =
      localStorage.getItem('username');

    const email =
      localStorage.getItem('email');

    const phone =
      localStorage.getItem('phone');

    const address =
      localStorage.getItem('address');

    const city =
      localStorage.getItem('city');

    const state =
      localStorage.getItem('state');


    this.user = {

      name:
        name ||
        username ||
        'Pavi3',

      username:
        username ||
        'Pavi3',

      email:
        email ||
        'Not Available',

      phone:
        phone ||
        'Not Available',

      address:
        address ||
        'Not Available',

      city:
        city ||
        'Not Available',

      state:
        state ||
        'Not Available'

    };

  }


  // ==========================================
  // EDIT PROFILE
  // ==========================================

  editProfile(): void {

    this.router.navigate([
      '/edit-profile'
    ]);

  }


  // ==========================================
  // BACK
  // ==========================================

  goBack(): void {

    this.router.navigate([
      '/my-bookings'
    ]);

  }

}