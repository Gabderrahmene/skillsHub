import { Component } from '@angular/core';
import { ModuleGrid } from "../module-grid/module-grid";
import { Optionlist } from "../optionlist/optionlist";

@Component({
  selector: 'app-homescreen',

  imports: [ModuleGrid, Optionlist],

  templateUrl: './homescreen.html',
  styleUrl: './homescreen.css',
})
export class Homescreen {

}
