import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaintingComponent } from './components/painting/painting';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PaintingComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('The-painting');
}
