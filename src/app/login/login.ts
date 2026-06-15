import { Component } from '@angular/core';
import { Auth } from '../auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(
    private auth: Auth,
    private router: Router,
  ) {}

  login() {
    this.auth.login(); // Call the login method from the Auth service to set authentication state
    this.router.navigate(['dashboard']); // Navigate to the dashboard after successful login
  }
}
