import { Component, signal, ViewChild } from '@angular/core';
import { Homescreen } from "./homescreen/homescreen";
import { Optionlist } from './optionlist/optionlist';
import { Dashboard } from "./dashboard/dashboard";
import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import { Sidenav } from './sidenav';
import { RouterOutlet } from "@angular/router";
@Component({
  selector: 'app-root',
  imports: [Homescreen, Optionlist, Dashboard, MatSidenavModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('skillsHub');
  @ViewChild('sidenav') sidenav?: MatSidenav;

  constructor(private Sidenav: Sidenav) { }

  ngAfterViewInit() {
    this.Sidenav.setSidenav(this.sidenav ?? null);
  }
}
