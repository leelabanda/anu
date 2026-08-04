import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
 templateUrl: './about.html',
styleUrls: ['./about.css']
})
export class AboutComponent {

  features = [
    {
      title: 'Fast Delivery',
      icon: '🚚',
      description: 'Quick and secure delivery across India.'
    },
    {
      title: 'Quality Products',
      icon: '⭐',
      description: '100% genuine and premium quality products.'
    },
    {
      title: 'Secure Payment',
      icon: '🔒',
      description: 'Safe payment with multiple payment options.'
    },
    {
      title: '24/7 Support',
      icon: '💬',
      description: 'Friendly customer support whenever you need.'
    }
  ];

}