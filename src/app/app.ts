import { Component, inject, signal, ViewChild } from '@angular/core';
import { Optionlist } from './components/optionlist/optionlist';
import { Dashboard } from "./components/dashboard/dashboard";
import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import { Sidenav } from './services/sidenav';
import { RouterOutlet } from "@angular/router";
import { Register } from "./components/register/register";
import { Login } from "./components/login/login";
@Component({
  selector: 'app-root',
  imports: [Optionlist, Dashboard, MatSidenavModule, RouterOutlet, Register, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('skillsHub');
  @ViewChild('sidenav') sidenav?: MatSidenav;
  Sidenav = inject(Sidenav)

  ngAfterViewInit() {
    this.Sidenav.setSidenav(this.sidenav ?? null);
  }
}
