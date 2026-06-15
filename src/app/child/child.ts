import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  constructor() {
    console.log(
      'Child component initialized and rendered! which is declared in app component and rendered in app component template',
    );
  }
}
