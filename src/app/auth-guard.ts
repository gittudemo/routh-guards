import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from './auth';

export const authGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);

  if (auth._isAuthenticated()) {
    // Check if the user is authenticated using the signal
    return true; //` Allow access to the route if authenticated
  }

  router.navigate(['/login']); // Redirect to the login page if not authenticated

  return false; // Deny access to the route if not authenticated
};
