import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-optionlist',
  imports: [MatIconModule],
  templateUrl: './optionlist.html',
  styleUrl: './optionlist.css',
})
export class Optionlist {
  isExpanded = false;

  toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
}
