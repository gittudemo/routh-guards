import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  productId?: string | null = null; // Initialize productId to null

  constructor(private route: ActivatedRoute) {
    // Extract the product ID from the URL
    this.route.params.subscribe((params) => {
      this.productId = params['id'] || null;
    });
  }
}
