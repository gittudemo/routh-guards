import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor(private router: Router) {}
  openProduct() {
    console.log('Navigating to product page with ID 101');
    // Navigate to the product page with ID 101
    this.router.navigate(['/product', 101]);
  }
}
