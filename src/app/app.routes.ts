import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { authGuard } from './auth-guard';
import { canDeactivateGuard } from './can-deactivate-guard';
import { Profile } from './profile/profile';
import { Product } from './product/product';
import { Products } from './products/products';

export const routes: Routes = [
  {
    path: 'login', // Define the route for the login page
    component: Login,
  },
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard], // Protect the dashboard route with the authGuard
  },
  {
    path: '', // Define the default route
    redirectTo: 'login', // Redirect to the login page by default
    pathMatch: 'full', // Ensure that the entire URL matches for redirection
  },
  {
    path: 'profile',
    component: Profile,
    canDeactivate: [canDeactivateGuard], // Protect the profile route with the canDeactivateGuard
  },
  {
    path: 'product/:id', // Define a route for product details with a dynamic parameter 'id'
    component: Product,
  },

  {
    path: 'products',
    component: Products,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
