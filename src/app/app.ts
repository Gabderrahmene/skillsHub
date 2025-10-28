import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Homescreen } from "./homescreen/homescreen";
import { Optionlist } from './optionlist/optionlist';
import { Dashboard } from "./dashboard/dashboard";
import { Statpage } from "./statpage/statpage";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Homescreen, Optionlist, Dashboard, Statpage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('skillsHub');
}
