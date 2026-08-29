import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  features: string[];
}

@Component({
  selector: 'app-det-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './det-product.html',
  styleUrls: ['./det-product.css']
})
export class DetProductComponent implements OnInit {

  products: Product[] = [

    {
      id: 1,
      name: 'Photo Frame with Stand',
      price: 750,
      oldPrice: 1000,
      image: 'https://i.postimg.cc/jdG7yqyj/Whats-App-Image.jpg',
      description:
        'Beautiful personalized 3D printed photo frame with stand. Perfect for couples, family and special gifts.',
      rating: 5,
      reviews: 21,
      features: [
        'Perfect for Couples & Gifts',
        'Beautiful Warm Lighting',
        'Premium Quality'
      ]
    },

    {
      id: 2,
      name: 'Birthday Frame with Photo',
      price: 505,
      oldPrice: 750,
      image: 'https://i.postimg.cc/jjvL5yK0/Whats-App-Image.jpg',
      description:
        'Beautiful personalized birthday photo frame made with premium 3D printing.',
      rating: 5,
      reviews: 18,
      features: [
        'Perfect Birthday Gift',
        'Beautiful Personalized Design',
        'Premium Quality'
      ]
    },

    {
      id: 3,
      name: 'Engraved Photo Frame',
      price: 450,
      oldPrice: 600,
      image: 'https://i.postimg.cc/43XqNgLz/Whats-App-Image-2025-11-07-at-08-53-58-6ab0890f.jpg',
      description:
        'Beautiful engraved personalized photo frame for memorable moments.',
      rating: 5,
      reviews: 15,
      features: [
        'Beautiful Engraved Design',
        'Perfect Gift',
        'Premium Quality'
      ]
    },

    {
      id: 4,
      name: 'Table Photo Frame',
      price: 550,
      oldPrice: 650,
      image: 'https://i.postimg.cc/mgSRSVKN/Whats-App-Image-2025-11-07-at-08-53-58-ee900066.jpg',
      description:
        'Elegant table photo frame suitable for home and office decoration.',
      rating: 5,
      reviews: 12,
      features: [
        'Perfect Table Decoration',
        'Beautiful Design',
        'Premium Quality'
      ]
    },

    {
      id: 5,
      name: 'Couples Photo Frame',
      price: 1200,
      oldPrice: 1500,
      image: 'https://i.postimg.cc/ZYLxQdQY/Whats-App-Image-2025-12-10-at-19-33-29-dd4202ed.jpg',
      description:
        'Premium personalized couples photo frame designed for special memories.',
      rating: 5,
      reviews: 25,
      features: [
        'Perfect for Couples',
        'Beautiful Personalized Design',
        'Premium Quality'
      ]
    },

    {
      id: 6,
      name: 'Baby Born',
      price: 750,
      oldPrice: 1000,
      image: 'https://i.postimg.cc/KjW0Hy7L/Baby-born.jpg',
      description:
        'Beautiful personalized baby-themed 3D printed product.',
      rating: 5,
      reviews: 16,
      features: [
        'Perfect Baby Gift',
        'Beautiful Design',
        'Premium Quality'
      ]
    },

    {
      id: 7,
      name: 'Doubleside Flip Name',
      price: 100,
      oldPrice: 125,
      image: 'https://i.postimg.cc/Nf5QHvRG/IMG-20250818-113018-jpg.jpg',
      description:
        'Personalized double-side flip name product with stylish 3D printing.',
      rating: 5,
      reviews: 10,
      features: [
        'Personalized Name',
        'Double Side Design',
        'Premium Quality'
      ]
    },

    {
      id: 8,
      name: 'Heart Photo Keychain',
      price: 60,
      oldPrice: 75,
      image: 'https://i.postimg.cc/Twnv9TCn/IMG-20260205-085304-593.webp',
      description:
        'Cute heart-shaped personalized photo keychain.',
      rating: 5,
      reviews: 19,
      features: [
        'Perfect Couples Gift',
        'Personalized Photo',
        'Premium Quality'
      ]
    },

    {
      id: 9,
      name: 'Car Keychain',
      price: 59,
      oldPrice: 75,
      image: 'https://i.postimg.cc/7YxmMjVj/Whats-App-Image.jpg',
      description:
        'Stylish 3D printed car keychain for car lovers.',
      rating: 5,
      reviews: 14,
      features: [
        'Perfect Car Lover Gift',
        'Stylish Design',
        'Premium Quality'
      ]
    },

    {
      id: 10,
      name: 'Name Keychain',
      price: 49,
      oldPrice: 65,
      image: 'https://i.postimg.cc/8zNwYNwz/IMG-20260113-115730-jpg.jpg',
      description:
        'Personalized name keychain made using high quality 3D printing.',
      rating: 5,
      reviews: 20,
      features: [
        'Personalized Name',
        'Perfect Gift',
        'Premium Quality'
      ]
    },

    {
      id: 11,
      name: 'Name Keychain',
      price: 39,
      oldPrice: 50,
      image: 'https://i.postimg.cc/4NfsnF4R/Name-Keychain2.jpg',
      description:
        'Simple and stylish personalized name keychain.',
      rating: 5,
      reviews: 11,
      features: [
        'Personalized Name',
        'Stylish Design',
        'Premium Quality'
      ]
    },

    {
      id: 12,
      name: 'Name Keychain',
      price: 49,
      oldPrice: 65,
      image: 'https://i.postimg.cc/Y0v1FPFv/IMG-20251228-214639.jpg',
      description:
        'Custom name keychain suitable for everyday use and gifting.',
      rating: 5,
      reviews: 13,
      features: [
        'Personalized Name',
        'Perfect Gift',
        'Premium Quality'
      ]
    },

    {
      id: 13,
      name: 'Letter Keychain',
      price: 19,
      oldPrice: 25,
      image: 'https://i.postimg.cc/8PtjFrN2/Whats-App-Image-2025-11-13-at-17-21-01-f874ea59.jpg',
      description:
        'Custom letter keychain with a lightweight and stylish design.',
      rating: 5,
      reviews: 9,
      features: [
        'Custom Letter',
        'Lightweight Design',
        'Premium Quality'
      ]
    },

    {
      id: 14,
      name: 'Name Stand',
      price: 150,
      oldPrice: 200,
      image: 'https://i.postimg.cc/QdMQBmwt/Whats-App-Image-2025-11-11-at-21-44-53-fcc15956.jpg',
      description:
        'Personalized name stand perfect for desks and tables.',
      rating: 5,
      reviews: 17,
      features: [
        'Personalized Name',
        'Perfect Table Decoration',
        'Premium Quality'
      ]
    },

    {
      id: 15,
      name: 'Name Keychain',
      price: 49,
      oldPrice: 65,
      image: 'https://i.postimg.cc/YqyS3KZm/Whats-App-Image-2025-11-13-at-16-38-51-95a7e4ab.jpg',
      description:
        'Beautiful personalized name keychain.',
      rating: 5,
      reviews: 12,
      features: [
        'Personalized Name',
        'Beautiful Design',
        'Premium Quality'
      ]
    },

    {
      id: 16,
      name: 'Unicorn Keychain',
      price: 49,
      oldPrice: 65,
      image: 'https://i.postimg.cc/d17n7YHx/Whats-App-Image-2025-11-11-at-21-44-54-bf83779a.jpg',
      description:
        'Cute unicorn-themed 3D printed keychain.',
      rating: 5,
      reviews: 22,
      features: [
        'Cute Unicorn Design',
        'Perfect Gift',
        'Premium Quality'
      ]
    },

    {
      id: 17,
      name: 'Magical Keychain',
      price: 49,
      oldPrice: 65,
      image: 'https://i.postimg.cc/rFgvDVzC/Magical-Keychain.jpg',
      description:
        'Beautiful magical-themed personalized keychain.',
      rating: 5,
      reviews: 10,
      features: [
        'Magical Design',
        'Perfect Gift',
        'Premium Quality'
      ]
    },

    {
      id: 18,
      name: 'Ganesh Toy',
      price: 80,
      oldPrice: 100,
      image: 'https://i.postimg.cc/HkGtNXhY/Whats-App-Image-2025-11-11-at-21-44-54-04fbd41c.jpg',
      description:
        'Beautiful 3D printed Ganesh decorative toy.',
      rating: 5,
      reviews: 18,
      features: [
        'Beautiful Ganesh Design',
        'Perfect Decoration',
        'Premium Quality'
      ]
    },

    {
      id: 19,
      name: 'Cat Toy',
      price: 150,
      oldPrice: 200,
      image: 'https://i.postimg.cc/FzcSfg85/Whats-App-Image-2026-04-10-at-11-24-19-AM.jpg',
      description:
        'Cute 3D printed cat toy with a unique design.',
      rating: 5,
      reviews: 15,
      features: [
        'Cute Cat Design',
        'Perfect Gift',
        'Premium Quality'
      ]
    },

    {
      id: 20,
      name: 'Sarotu Toy',
      price: 100,
      oldPrice: 150,
      image: 'https://i.postimg.cc/wMNcddQZ/Whats-App-Image-2026-04-10-at-10-49-02-AM.jpg',
      description:
        'Unique 3D printed Sarotu toy with beautiful finishing.',
      rating: 5,
      reviews: 11,
      features: [
        'Beautiful Toy Design',
        'Perfect Gift',
        'Premium Quality'
      ]
    }

  ];

  product!: Product;

  quantity = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    const foundProduct = this.products.find(
      p => p.id === id
    );

    if (foundProduct) {

      this.product = foundProduct;

    } else {

      this.router.navigate(['/products']);

    }
  }

  getDiscount(): number {

    if (!this.product) {
      return 0;
    }

    return Math.round(
      ((this.product.oldPrice - this.product.price) /
        this.product.oldPrice) * 100
    );
  }

  increaseQuantity(): void {

    this.quantity++;

  }

  decreaseQuantity(): void {

    if (this.quantity > 1) {

      this.quantity--;

    }

  }

  addToCart(): void {

    if (!this.product) {
      return;
    }

    let cart = JSON.parse(
      localStorage.getItem('cart') || '[]'
    );

    const existing = cart.find(
      (item: any) => item.id === this.product.id
    );

    if (existing) {

      existing.qty += this.quantity;

    } else {

      cart.push({

        id: this.product.id,

        name: this.product.name,

        price: this.product.price,

        image: this.product.image,

        qty: this.quantity

      });

    }

    localStorage.setItem(
      'cart',
      JSON.stringify(cart)
    );

    alert('Added to cart ✅');

  }

  buyNow(): void {

    if (!this.product) {
      return;
    }

    const user =
      localStorage.getItem('userLogin');

    if (!user) {

      localStorage.setItem(
        'redirectAfterLogin',
        this.router.url
      );

      alert('Please login first 🔐');

      this.router.navigate(['/login']);

      return;
    }

    this.router.navigate([
      '/checkout',
      this.product.id
    ]);

  }

  goBack(): void {

    this.router.navigate(['/products']);

  }

}