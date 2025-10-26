import { Component } from '@angular/core';
import { Module } from '../module';

@Component({
  selector: 'app-module-container',
  imports: [],
  templateUrl: './module-container.html',
  styleUrl: './module-container.css',
})
export class ModuleContainer {
  module: Module = {
    id: "1",
    title: "PAWEB",
    progres: 13,
    size: 16,
    description: "i am in pain please help i am begging you dsqhidsqgidsqog dgsqiygyqisgyq  sqdygigodsqiyg  dsqyigodsqiyg"
  };
}
