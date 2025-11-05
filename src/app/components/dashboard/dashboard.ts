import { Component, inject } from '@angular/core';
import { Sidenav } from '../../services/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-dashboard',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  private Sidenav = inject(Sidenav);

  toggle() {
    this.Sidenav.toggle();
  }
}
