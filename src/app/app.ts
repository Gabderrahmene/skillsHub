import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Homescreen } from "./homescreen/homescreen";
import { Optionlist } from './optionlist/optionlist';
import { Dashboard } from "./dashboard/dashboard";
import { Statpage } from "./statpage/statpage";
import { ModuleGrid } from "./module-grid/module-grid";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Homescreen, Optionlist, Dashboard, Statpage, ModuleGrid],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('skillsHub');
}
