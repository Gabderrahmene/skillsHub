import { Component, input } from '@angular/core';
import { Module } from '../module';

@Component({
  selector: 'app-module-container',
  imports: [],
  templateUrl: './module-container.html',
  styleUrl: './module-container.css',
})
export class ModuleContainer {
  id = input<string>("");
  title = input("", { transform: truncate });
  description = input<string>("");
  progres = input<number>(0);
  size = input<number>(10);

}
function truncate(value: string): string {
  value = value.trim();
  if (value.length > 20) {
    value = value.substring(0, 20) + "...";
  }
  return value;
}
