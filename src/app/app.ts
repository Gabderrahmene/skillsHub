import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Homescreen } from "./homescreen/homescreen";
import { Optionlist } from './optionlist/optionlist';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Homescreen, Optionlist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('skillsHub');
}
