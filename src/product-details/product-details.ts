import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css']
})
export class ProductComponent {

  products = [

    {
      id:1,
      name:'Photo Frame with Stand',
      mrp:1000,
      currentPrice:750,
      image:'https://i.postimg.cc/jdG7yqyj/Whats-App-Image.jpg'
    },

    {
      id:2,
      name:'Unicorn',
      mrp:1500,
      currentPrice:1199,
      image: 'https://i.postimg.cc/d17n7YHx/Whats-App-Image-2025-11-11-at-21-44-54-bf83779a.jpg'
    },

    {
      id:3,
      name: 'Heart Photo Keychain',
      mrp:1200,
      currentPrice:899,
      image: 'https://i.postimg.cc/Twnv9TCn/IMG-20260205-085304-593.webp'
    },

    {
      id:4,
      name: 'Ganesh Toy',
      mrp:800,
      currentPrice:599,
      image: 'https://i.postimg.cc/HkGtNXhY/Whats-App-Image-2025-11-11-at-21-44-54-04fbd41c.jpg'
    }

  ];

  getDiscount(mrp:number,current:number):number{
    return Math.round(((mrp-current)/mrp)*100);
  }

}