import { Component, inject, ViewChild } from '@angular/core';

import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import { RouterOutlet } from "@angular/router";
import { Dashboard } from '../dashboard/dashboard';
import { Optionlist } from '../optionlist/optionlist';
import { Sidenav } from '../../services/sidenav';

@Component({
  selector: 'app-teacher-layout',
  imports: [Dashboard, MatSidenavModule, RouterOutlet],
  templateUrl: './teacher-layout.html',
  styleUrl: './teacher-layout.css',
})
export class TeacherLayout {
  @ViewChild('sidenav') sidenav?: MatSidenav;
  Sidenav = inject(Sidenav)

  ngAfterViewInit() {
    this.Sidenav.setSidenav(this.sidenav ?? null);
  }
}
