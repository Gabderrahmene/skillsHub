import { Component } from '@angular/core';
import { RouterModule, Routes,RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-optionlist',
  imports: [MatIconModule,RouterModule,RouterLink],
  templateUrl: './optionlist.html',
  styleUrl: './optionlist.css',
})
export class Optionlist {
  isExpanded = false;

  toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
 
}
