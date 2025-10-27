import { Component } from '@angular/core';
import { ModuleGrid } from "../module-grid/module-grid";

@Component({
  selector: 'app-homescreen',
  imports: [ModuleGrid],
  templateUrl: './homescreen.html',
  styleUrl: './homescreen.css',
})
export class Homescreen {

}
