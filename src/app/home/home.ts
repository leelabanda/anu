import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  scrollToProducts(): void {
    this.viewportScroller.scrollToAnchor('products');
  }

  categories = [
    {
      id:1,
      name: 'Photo Frame with Stand',
      image: 'https://i.postimg.cc/jdG7yqyj/Whats-App-Image.jpg'
    },
    {
      id:2,
      name: 'Unicorn',
      image: 'https://i.postimg.cc/d17n7YHx/Whats-App-Image-2025-11-11-at-21-44-54-bf83779a.jpg'
    },
    {
      id:3,
      name: 'Heart Photo Keychain',
      image: 'https://i.postimg.cc/Twnv9TCn/IMG-20260205-085304-593.webp'
    },
    {
      id:4,
      name: 'Ganesh Toy',
      image: 'https://i.postimg.cc/HkGtNXhY/Whats-App-Image-2025-11-11-at-21-44-54-04fbd41c.jpg'
    }
  ];

  products = [
    {
      id:1,
      name: 'Baby Born',
      price: 1200,
      image: 'https://i.postimg.cc/KjW0Hy7L/Baby-born.jpg'
    },
    {
      id:2,
      name: 'Double Side Flip Name',
      price: 100,
      image: 'https://i.postimg.cc/Nf5QHvRG/IMG-20250818-113018-jpg.jpg'
    },
    {
      id:3,
      name: 'Car Keychain',
      price: 60,
      image: 'https://i.postimg.cc/7YxmMjVj/Whats-App-Image.jpg'
    },
    {
      id:4,
      name: 'Sarotu Toy',
      price: 80,
      image: 'https://i.postimg.cc/wMNcddQZ/Whats-App-Image-2026-04-10-at-10-49-02-AM.jpg'
    }
  ];

}