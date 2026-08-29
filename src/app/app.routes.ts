import { Routes } from '@angular/router';

import { NavbarComponent } from './navbar/navbar';
import { FooterComponent } from './footer/footer';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contacts/contacts';
import { HomeComponent } from './home/home';
import { MainComponent } from '../main-component/main-component';

import { FramesComponent } from '../frames/frames';
import { Keychains } from '../keychains/keychains';
import { Toys } from '../toys/toys';

import { DetProductComponent } from '../det-product/det-product';
import { BuyNowComponent } from '../buynow/buynow';
import { Cartcomponent } from './cart/cart';
import { ProductsComponent } from '../product-details/product-details';
import { WishlistComponent } from '../wishlist/wishlist';
import { Profile } from '../profile/profile';

export const routes: Routes = [

  // =========================
  // DEFAULT
  // =========================

  {
    path: '',
    redirectTo: 'main-component',
    pathMatch: 'full'
  },

  // =========================
  // MAIN
  // =========================

  {
    path: 'main-component',
    component: MainComponent
  },

  // =========================
  // NAVBAR / FOOTER
  // =========================

  {
    path: 'Navbar',
    component: NavbarComponent
  },

  {
    path: 'Footer',
    component: FooterComponent
  },

  // =========================
  // AUTH
  // =========================

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  // =========================
  // PAGES
  // =========================

  {
    path: 'About',
    component: AboutComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: Profile
  },

  // =========================
  // PRODUCTS
  // =========================

  {
    path: 'products',
    component: ProductsComponent
  },

  // =========================
  // PRODUCT DETAILS
  // =========================

  {
    path: 'product-details/:id',
    component: DetProductComponent,
    data: {
      renderMode: 'client'
    }
  },

  // =========================
  // BUY NOW
  // =========================

  {
    path: 'buynow',
    component: BuyNowComponent
  },

  // =========================
  // CART
  // =========================

  {
    path: 'cart',
    component: Cartcomponent
  },

  // =========================
  // CATEGORY ROUTES
  // =========================

  {
    path: 'frames',
    component: FramesComponent
  },

  {
    path: 'keychains',
    component: Keychains
  },

  {
    path: 'toys',
    component: Toys
  },

  // =========================
  // INVALID ROUTE
  // =========================

  {
    path: '**',
    redirectTo: 'products'
  }

];