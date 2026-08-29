import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-cartcomponent',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cartcomponent implements OnInit {

  cartItems: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadCart();
  }

  // Load products from localStorage
  loadCart(): void {

    const savedCart = localStorage.getItem('cart');

    if (savedCart) {

      this.cartItems = JSON.parse(savedCart);

    } else {

      this.cartItems = [];

    }

    console.log('Cart Items:', this.cartItems);
  }


  // Increase quantity
  increaseQuantity(item: any): void {

    item.quantity = (item.quantity || 1) + 1;

    this.saveCart();
  }


  // Decrease quantity
  decreaseQuantity(item: any): void {

    if ((item.quantity || 1) > 1) {

      item.quantity--;

      this.saveCart();
    }
  }


  // Remove product
  removeItem(index: number): void {

    this.cartItems.splice(index, 1);

    this.saveCart();
  }


  // Save cart
  saveCart(): void {

    localStorage.setItem(
      'cart',
      JSON.stringify(this.cartItems)
    );
  }


  // Calculate total
  getTotal(): number {

    return this.cartItems.reduce(
      (total: number, item: any) => {

        const price = Number(item.price) || 0;

        const quantity = Number(item.quantity) || 1;

        return total + (price * quantity);

      },
      0
    );
  }


  // Buy Now
  buyNow(): void {

    if (this.cartItems.length === 0) {

      alert('Your cart is empty!');

      return;
    }

    // Store products for Buy Now page
    localStorage.setItem(
      'buyNowItems',
      JSON.stringify(this.cartItems)
    );

    // Go to Buy Now page
    this.router.navigate(['/buynow']);
  }

}