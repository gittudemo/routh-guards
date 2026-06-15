import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  category: string | null = null;
  sort: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Extract query parameters from the URL using Angular's queryParamMap
    this.route.queryParamMap.subscribe((params) => {
      this.category = params.get('category'); // Get the 'category' query parameter
      this.sort = params.get('sort'); // Get the 'sort' query parameter
    });
  }
}
