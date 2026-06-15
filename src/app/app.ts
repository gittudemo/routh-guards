import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Child } from './child/child';
import { SignalForm } from './signal-form/signal-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Child, SignalForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('routh-guards');
}
