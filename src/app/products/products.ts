import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent {

  cartCount: number = 0;

  searchText: string = '';

  searchProduct() {
    console.log('Searching:', this.searchText);
    // Add your search logic here
  }

}