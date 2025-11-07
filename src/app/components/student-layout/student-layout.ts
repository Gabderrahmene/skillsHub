import { Component, inject, ViewChild } from '@angular/core';

import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import { RouterOutlet } from "@angular/router";
import { Dashboard } from '../dashboard/dashboard';
import { Optionlist } from '../optionlist/optionlist';
import { Sidenav } from '../../services/sidenav';

@Component({
  selector: 'app-student-layout',
  imports: [Optionlist, Dashboard, MatSidenavModule, RouterOutlet],
  templateUrl: './student-layout.html',
  styleUrl: './student-layout.css',
})
export class StudentLayout {
  @ViewChild('sidenav') sidenav?: MatSidenav;
  Sidenav = inject(Sidenav)

  ngAfterViewInit() {
    this.Sidenav.setSidenav(this.sidenav ?? null);
  }
}
