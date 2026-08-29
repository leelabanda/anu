import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface WishlistProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  rating: number;
  reviews: number;
  inStock: boolean;
}

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishlist.html',
  styleUrls: ['./wishlist.css']
})
export class WishlistComponent implements OnInit {

  wishlist: WishlistProduct[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadWishlist();
  }

  // ==============================
  // LOAD WISHLIST
  // ==============================

  loadWishlist(): void {

    const savedWishlist = localStorage.getItem('wishlist');

    if (savedWishlist) {

      this.wishlist = JSON.parse(savedWishlist);

    } else {

      this.wishlist = [
        {
          id: 1,
          name: 'Premium Wireless Headphones',
      image: 'https://i.postimg.cc/jdG7yqyj/Whats-App-Image.jpg',
          price: 1999,
          oldPrice: 2999,
          rating: 4.5,
          reviews: 128,
          inStock: true
        },
        {
          id: 2,
          name: 'Smart Watch',
      image: 'https://i.postimg.cc/d17n7YHx/Whats-App-Image-2025-11-11-at-21-44-54-bf83779a.jpg',
          price: 2499,
          oldPrice: 3999,
          rating: 4.3,
          reviews: 96,
          inStock: true
        },
        {
          id: 3,
          name: 'Wireless Bluetooth Speaker',
      image: 'https://i.postimg.cc/Twnv9TCn/IMG-20260205-085304-593.webp',
          price: 1499,
          oldPrice: 2299,
          rating: 4.6,
          reviews: 75,
          inStock: true
        },
      
    
   
        {
          id: 4,
          name: 'Stylish Backpack',
          image: 'assets/products/bag.jpg',
          price: 999,
          oldPrice: 1599,
          rating: 4.2,
          reviews: 52,
          inStock: true
        }
      ];

      this.saveWishlist();
    }
  }

  // ==============================
  // SAVE WISHLIST
  // ==============================

  saveWishlist(): void {

    localStorage.setItem(
      'wishlist',
      JSON.stringify(this.wishlist)
    );

  }

  // ==============================
  // REMOVE FROM WISHLIST
  // ==============================

  removeFromWishlist(product: WishlistProduct): void {

    this.wishlist = this.wishlist.filter(
      item => item.id !== product.id
    );

    this.saveWishlist();

  }

  // ==============================
  // ADD TO CART
  // ==============================

  addToCart(product: WishlistProduct): void {

    let cart: WishlistProduct[] = [];

    const savedCart = localStorage.getItem('cart');

    if (savedCart) {
      cart = JSON.parse(savedCart);
    }

    const alreadyExists = cart.some(
      item => item.id === product.id
    );

    if (!alreadyExists) {

      cart.push(product);

      localStorage.setItem(
        'cart',
        JSON.stringify(cart)
      );

      alert(`${product.name} added to cart 🛒`);

    } else {

      alert(`${product.name} is already in your cart`);

    }

  }

  // ==============================
  // CONTINUE SHOPPING
  // ==============================

  shopNow(): void {

    this.router.navigate(['/products']);

  }

  // ==============================
  // DISCOUNT
  // ==============================

  getDiscount(product: WishlistProduct): number {

    if (product.oldPrice <= 0) {
      return 0;
    }

    return Math.round(
      ((product.oldPrice - product.price) /
        product.oldPrice) * 100
    );

  }

  // ==============================
  // STAR RATING
  // ==============================

  getStars(rating: number): string[] {

    const stars: string[] = [];

    for (let i = 1; i <= 5; i++) {

      if (i <= Math.floor(rating)) {

        stars.push('full');

      } else if (i - rating < 1) {

        stars.push('half');

      } else {

        stars.push('empty');

      }

    }

    return stars;

  }

  // ==============================
  // TOTAL WISHLIST VALUE
  // ==============================

  getTotal(): number {

    return this.wishlist.reduce(
      (total, product) => total + product.price,
      0
    );

  }

}