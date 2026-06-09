import { Injectable , signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
   _isAuthenticated = signal(false); // Use a signal to track authentication state

  login() {
    this._isAuthenticated.set(true); // Set the authentication state to true when logging in
  }
  logout() {
    this._isAuthenticated.set(false); // Set the authentication state to false when logging out
  }
}
