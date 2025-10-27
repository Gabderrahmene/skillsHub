import { Component } from '@angular/core';
import { ModuleContainer } from "../module-container/module-container";

@Component({
  selector: 'app-module-grid',
  imports: [ModuleContainer],
  templateUrl: './module-grid.html',
  styleUrl: './module-grid.css',
})
export class ModuleGrid {

}
