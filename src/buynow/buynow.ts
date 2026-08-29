import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-buy-now',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],

  templateUrl: './buynow.html',
  styleUrl: './buynow.css'
})
export class BuyNowComponent implements OnInit {

  // =====================================
  // CHECKOUT PRODUCTS
  // =====================================

  buyNowItems: any[] = [];


  // =====================================
  // CUSTOMER DETAILS
  // =====================================

  fullName: string = '';

  phoneNumber: string = '';

  deliveryAddress: string = '';


  // =====================================
  // CONSTRUCTOR
  // =====================================

  constructor(
    private router: Router
  ) {}


  // =====================================
  // PAGE LOAD
  // =====================================

  ngOnInit(): void {

    const savedItems = localStorage.getItem('buyNowItems');

    if (savedItems) {

      try {

        this.buyNowItems = JSON.parse(savedItems);

      } catch (error) {

        console.error(
          'Error reading checkout items:',
          error
        );

        this.buyNowItems = [];
      }

    } else {

      this.buyNowItems = [];
    }


    // Make sure quantity exists

    this.buyNowItems.forEach((item: any) => {

      if (!item.quantity || item.quantity < 1) {

        item.quantity = 1;
      }

    });


    console.log(
      'Checkout Items:',
      this.buyNowItems
    );
  }


  // =====================================
  // INCREASE QUANTITY
  // =====================================

  increaseQuantity(item: any): void {

    item.quantity =
      (Number(item.quantity) || 1) + 1;

    this.saveBuyNowItems();
  }


  // =====================================
  // DECREASE QUANTITY
  // =====================================

  decreaseQuantity(item: any): void {

    const quantity =
      Number(item.quantity) || 1;

    if (quantity > 1) {

      item.quantity = quantity - 1;

      this.saveBuyNowItems();
    }
  }


  // =====================================
  // REMOVE PRODUCT
  // =====================================

  removeItem(index: number): void {

    this.buyNowItems.splice(index, 1);

    this.saveBuyNowItems();
  }


  // =====================================
  // SAVE CHECKOUT ITEMS
  // =====================================

  saveBuyNowItems(): void {

    localStorage.setItem(
      'buyNowItems',
      JSON.stringify(this.buyNowItems)
    );
  }


  // =====================================
  // PRODUCT TOTAL
  // =====================================

  getItemTotal(item: any): number {

    const price =
      Number(item.price) || 0;

    const quantity =
      Number(item.quantity) || 1;

    return price * quantity;
  }


  // =====================================
  // TOTAL AMOUNT
  // =====================================

  getTotal(): number {

    return this.buyNowItems.reduce(
      (total: number, item: any) => {

        return total + this.getItemTotal(item);

      },
      0
    );
  }


  // =====================================
  // IMAGE URL
  // =====================================

  getImageUrl(image: string): string {

    if (!image) {

      return '';
    }


    // Already complete URL

    if (
      image.startsWith('http://') ||
      image.startsWith('https://')
    ) {

      return image;
    }


    // Convert /assets/... to website URL

    if (image.startsWith('/')) {

      return window.location.origin + image;
    }


    return window.location.origin + '/' + image;
  }


  // =====================================
  // PLACE ORDER
  // =====================================

  placeOrder(): void {

    // -------------------------------
    // CHECK PRODUCTS
    // -------------------------------

    if (this.buyNowItems.length === 0) {

      alert('No product selected.');

      return;
    }


    // -------------------------------
    // CHECK CUSTOMER DETAILS
    // -------------------------------

    if (!this.fullName.trim()) {

      alert('Please enter your full name.');

      return;
    }


    if (!this.phoneNumber.trim()) {

      alert('Please enter your phone number.');

      return;
    }


    if (!this.deliveryAddress.trim()) {

      alert('Please enter your delivery address.');

      return;
    }


    // -------------------------------
    // WHATSAPP NUMBER
    // -------------------------------

    const whatsappNumber =
      '919444210661';


    // -------------------------------
    // PRODUCT MESSAGE
    // -------------------------------

    let productMessage = '';


    this.buyNowItems.forEach(
      (item: any, index: number) => {

        const quantity =
          Number(item.quantity) || 1;

        const price =
          Number(item.price) || 0;

        const amount =
          price * quantity;

        const imageUrl =
          this.getImageUrl(item.image);


        productMessage +=
          `\n📦 *Product ${index + 1}*\n` +

          `Name: ${item.name || 'Product'}\n` +

          `Quantity: ${quantity}\n` +

          `Price: ₹${price}\n` +

          `Amount: ₹${amount}\n` +

          `Image: ${imageUrl}\n`;
      }
    );


    // -------------------------------
    // TOTAL
    // -------------------------------

    const totalAmount =
      this.getTotal();


    // -------------------------------
    // WHATSAPP MESSAGE
    // -------------------------------

    const message =

      `🛍️ *NEW ORDER - ANU 3D PRINTING*\n\n` +

      `👤 *CUSTOMER DETAILS*\n` +

      `Name: ${this.fullName}\n` +

      `Phone: ${this.phoneNumber}\n` +

      `Address: ${this.deliveryAddress}\n\n` +

      `📦 *ORDER DETAILS*\n` +

      `${productMessage}\n` +

      `💰 *TOTAL AMOUNT: ₹${totalAmount}*\n\n` +

      `Please confirm my order. Thank you!`;


    // -------------------------------
    // WHATSAPP URL
    // -------------------------------

    const whatsappUrl =

      `https://wa.me/${whatsappNumber}` +

      `?text=${encodeURIComponent(message)}`;


    console.log(
      'WhatsApp Message:',
      message
    );

    console.log(
      'WhatsApp URL:',
      whatsappUrl
    );


    // -------------------------------
    // OPEN WHATSAPP
    // -------------------------------

    window.open(
      whatsappUrl,
      '_blank'
    );


    // -------------------------------
    // CLEAR CHECKOUT
    // -------------------------------

    localStorage.removeItem(
      'buyNowItems'
    );

    localStorage.removeItem(
      'cart'
    );

  }

}