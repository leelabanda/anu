import { Component } from '@angular/core';
import { CartService } from '../cart/cart';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cartcomponent',
  imports: [CommonModule],
  templateUrl: './cartcomponent.html',
  styleUrl: './cartcomponent.css',
})
export class Cartcomponent {
   cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });
  }
  remove(index: number): void {
    this.cartService.removeFromCart(index);
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => {
      return total + Number(item.price);
    }, 0);
  }
}
