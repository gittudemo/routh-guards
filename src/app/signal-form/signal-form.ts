import { CommonModule } from '@angular/common';
import { Component, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form } from '@angular/forms/signals';

@Component({
  standalone: true,
  selector: 'app-signal-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './signal-form.html',
  styleUrls: ['./signal-form.css'],
})
export class SignalForm {
  //initiliaze the signal with an object having email and password properties, loginModel
  // loginModel = signal({
  //   email: '',
  //   password: '',
  // });

  email = model('');
  password = model('');

  // loginForm = form(this.loginModel);

  submit() {
    console.log(this.email());
    console.log(this.password());
    // Log the current signal value to the console
    console.log('loginModel', { email: this.email(), password: this.password() });
  }
  // Bubble sort implementation
  test() {
    let arr = [71, 46, 36, 19, 49, 35, 12, 91];

    // Bubble sort - compare adjacent elements and swap if needed
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    console.log('Sorted array:', arr); // [12, 19, 35, 36, 46, 49, 71, 91]
    return arr;
  }
}
