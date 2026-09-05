import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [RouterModule,FormsModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  searchText: string = '';

  constructor(private router: Router) {}

  searchProducts(): void {

    const keyword = this.searchText.trim();
    if(!keyword){
      this.router.navigate(['/products']);
    }
    if (!keyword) {
      this.router.navigate(['/products']);
      return;
    }

    this.router.navigate(
      ['/products'],
      {
        queryParams: {
          search: keyword
        }
      }
    );
  }
}