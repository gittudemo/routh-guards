import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { authGuard } from './auth-guard';

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
];
