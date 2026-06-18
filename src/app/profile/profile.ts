import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [RouterLink],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  canDeactivate() {
    return confirm('Are you sure you want to leave this page?'); 
    // Show a confirmation dialog when trying to navigate away from the profile page
  }
  
}
