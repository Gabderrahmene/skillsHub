import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-module',
  imports: [],
  templateUrl: './module.html',
  styleUrl: './module.css',
})
export class Module {
  private router = inject(Router);
  affichage() {
    this.router.navigate(["/student/modulepage"]);
  }
}