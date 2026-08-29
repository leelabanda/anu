import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css']
})
export class ProductsComponent {

  products: any[] = [

     {
      id: 1,
      name: 'Photo Frame with Stand',
      currentPrice: 750,
      mrp: 1000,
      image: 'https://i.postimg.cc/jdG7yqyj/Whats-App-Image.jpg',
     },
     {
      id: 2,
      name: 'Birthday Frame with Photo',
      currentPrice: 505,
      mrp: 750,
      image: 'https://i.postimg.cc/jjvL5yK0/Whats-App-Image.jpg',
     
    },

    {
      id: 3,
      name: 'Engraved Photo Frame',
      currentPrice: 450,
      mrp: 600,
      image: 'https://i.postimg.cc/43XqNgLz/Whats-App-Image-2025-11-07-at-08-53-58-6ab0890f.jpg',
    },

    {
      id: 4,
      name: 'Table Photo Frame',
      currentPrice: 550,
      mrp: 650,
      image: 'https://i.postimg.cc/mgSRSVKN/Whats-App-Image-2025-11-07-at-08-53-58-ee900066.jpg',
      
    },
    {
      id: 5,
      name: 'Couples Photo Frame',
      currentPrice: 1200,
      oldPrice: 1500,
      image: 'https://i.postimg.cc/ZYLxQdQY/Whats-App-Image-2025-12-10-at-19-33-29-dd4202ed.jpg',
    
    },

    {
      id: 6,
      name: 'Baby Born',
      currentPrice: 750,
      mrp: 1000,
      image: 'https://i.postimg.cc/KjW0Hy7L/Baby-born.jpg',
   
    },

    {
      id: 7,
      name: 'Doubleside Flip Name',
      currentPrice: 100,
      mrp: 125,
      image: 'https://i.postimg.cc/Nf5QHvRG/IMG-20250818-113018-jpg.jpg',
     
    },

    {
      id: 8,
      name: 'Heart Photo Keychain',
      currentPrice: 60,
      mrp: 75,
      image: 'https://i.postimg.cc/Twnv9TCn/IMG-20260205-085304-593.webp',
   
    },

    {
      id: 9,
      name: 'Car Keychain',
      currentPrice: 59,
      mrp: 75,
      image: 'https://i.postimg.cc/7YxmMjVj/Whats-App-Image.jpg',
      
    },

    {
      id: 10,
      name: 'Name Keychain',
      currentPrice: 49,
      mrp: 65,
      image: 'https://i.postimg.cc/8zNwYNwz/IMG-20260113-115730-jpg.jpg',
      
    },

    {
      id: 11,
      name: 'Name Keychain',
      currentPrice: 39,
      mrp: 50,
      image: 'https://i.postimg.cc/4NfsnF4R/Name-Keychain2.jpg',
      
    },

    {
      id: 12,
      name: 'Name Keychain',
      currentPrice: 49,
      mrp: 65,
      image: 'https://i.postimg.cc/Y0v1FPFv/IMG-20251228-214639.jpg',
      
    },
     {
      id: 13,
      name: 'Letter Keychain',
      currentPrice: 19,
      mrp: 25,
      image: 'https://i.postimg.cc/8PtjFrN2/Whats-App-Image-2025-11-13-at-17-21-01-f874ea59.jpg',
      
    },

    {
      id: 14,
      name: 'Name Stand',
      currentPrice: 150,
      mrp: 200,
      image: 'https://i.postimg.cc/QdMQBmwt/Whats-App-Image-2025-11-11-at-21-44-53-fcc15956.jpg',
     
    },

    {
      id: 15,
      name: 'Name Keychain',
      currentPrice: 49,
      mrp: 65,
      image: 'https://i.postimg.cc/YqyS3KZm/Whats-App-Image-2025-11-13-at-16-38-51-95a7e4ab.jpg',
      
    },

    {
      id: 16,
      name: 'Unicorn Keychain',
      currentPrice: 49,
      mrp: 65,
      image: 'https://i.postimg.cc/d17n7YHx/Whats-App-Image-2025-11-11-at-21-44-54-bf83779a.jpg',
    
    },

    {
      id: 17,
      name: 'Magical Keychain',
      currentPrice: 49,
      mrp: 65,
      image: 'https://i.postimg.cc/rFgvDVzC/Magical-Keychain.jpg',
     
    },

    {
      id: 18,
      name: 'Ganesh Toy',
      currentPrice: 80,
      mrp: 100,
      image: 'https://i.postimg.cc/HkGtNXhY/Whats-App-Image-2025-11-11-at-21-44-54-04fbd41c.jpg',
      
    },

    {
      id: 19,
      name: 'Cat Toy',
      currentPrice: 150,
      mrp: 200,
      image: 'https://i.postimg.cc/FzcSfg85/Whats-App-Image-2026-04-10-at-11-24-19-AM.jpg',
      
    },

    {
      id: 20,
      name: 'Sarotu Toy',
      currentPrice: 100,
      mrp: 150,
      image: 'https://i.postimg.cc/wMNcddQZ/Whats-App-Image-2026-04-10-at-10-49-02-AM.jpg',
     
    }

  ];



 

  constructor(private router: Router) {}

  // ==============================
  // OPEN PRODUCT DETAILS
  // ==============================

  openProduct(id: number): void {

    this.router.navigate([
      '/product-details',
      id
    ]);

  }

  // ==============================
  // ADD TO CART
  // ==============================

  addToCart(product: any): void {

    let cart: any[] = JSON.parse(
      localStorage.getItem('cart') || '[]'
    );

    const existingProduct = cart.find(
      item => item.id === product.id
    );

    if (existingProduct) {

      existingProduct.quantity =
        (existingProduct.quantity || 1) + 1;

    } else {

      cart.push({
        ...product,
        quantity: 1
      });

    }

    localStorage.setItem(
      'cart',
      JSON.stringify(cart)
    );

    alert(product.name + ' added to cart');

  }

  // ==============================
  // DISCOUNT
  // ==============================

  getDiscount(
    mrp: number,
    currentPrice: number
  ): number {

    if (!mrp || !currentPrice) {
      return 0;
    }

    return Math.round(
      ((mrp - currentPrice) / mrp) * 100
    );

  }

}