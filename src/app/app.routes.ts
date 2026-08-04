import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar';
import { FooterComponent } from './footer/footer';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contacts/contacts';
import { HomeComponent } from './home/home';
import { MainComponent } from '../main-component/main-component';
import { ProductHeaderComponent } from './products/products';
import { ProductComponent } from '../product-details/product-details';
import { CartService } from './cart/cart';
import { Cartcomponent } from './cartcomponent/cartcomponent';

export const routes: Routes = [
   { path: '', redirectTo: 'main-component', pathMatch: 'full' },
   {path: 'main-component',component:MainComponent },
  {path: 'Navbar',component: NavbarComponent},
  {path: 'Footer',component: FooterComponent},

  {path: 'login',component: LoginComponent},
  {path: 'Register',component: RegisterComponent},
  {path: 'About',component: AboutComponent},
  {path: 'contact',component: ContactComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path: 'product-details',component:ProductComponent},
{ path: 'products', component: ProductComponent },
{path:'cart',component:Cartcomponent}





];