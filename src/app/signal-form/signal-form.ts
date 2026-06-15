import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { form} from '@angular/forms/signals';

@Component({
  standalone: true,
  selector: 'app-signal-form',
  imports: [CommonModule],
  templateUrl: './signal-form.html',
  styleUrls: ['./signal-form.css'],
})
export class SignalForm {
  //initiliaze the signal with an object having email and password properties, loginModel
  loginModel = signal({
    email: '',
    password: '',
  });

  loginForm = form(this.loginModel);

  submit() {}
}
