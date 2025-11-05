import { Component } from '@angular/core';
import { ModuleGrid } from "../module-grid/module-grid";
import { Statpage } from "../statpage/statpage";

@Component({
  selector: 'app-homescreen',

  imports: [ModuleGrid, Statpage],

  templateUrl: './homescreen.html',
  styleUrl: './homescreen.css',
})
export class Homescreen {

}
