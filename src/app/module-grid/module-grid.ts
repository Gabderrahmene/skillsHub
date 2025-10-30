import { Component } from '@angular/core';
import { ModuleContainer } from "../module-container/module-container";
import { Module } from '../module';

@Component({
  selector: 'app-module-grid',
  imports: [ModuleContainer],
  templateUrl: './module-grid.html',
  styleUrl: './module-grid.css',
})
export class ModuleGrid {
  modules: Module[] = [
    {
      id: "1",
      title: "samaka",
      progres: 13,
      size: 16,
      description: "ana samaka ta3icho fi el ba7r a dsqdsq dsqsq sq sq dq dqs dqsdsq dqssq dsqsna samaka lalalalala"
    },
    {
      id: "1",
      title: "samaka",
      progres: 13,
      size: 16,
      description: "ana samaka ta3icho fi el ba7r ana samaka lalalad sqdsqds q sqdsq d sqlala"
    },
    {
      id: "1",
      title: "samaka",
      progres: 13,
      size: 16,
      description: "ana samaka ta3icho fi el ba7r ana samaka lalalalala"
    },
    {
      id: "1",
      title: "dsqdsqsq dsqqd sqd sqq dsq dsdsq dsq dsqsqdq sq",
      progres: 11,
      size: 16,
      description: "ana samamaka lalalalala"
    },
    {
      id: "1",
      title: "dsqdsqsq dsqqd sqd sqq dsq dsdsq dsq dsqsqdq sq",
      progres: 11,
      size: 16,
      description: "ana samamaka lalalalala"
    },
    {
      id: "1",
      title: "dsqdsqsq dsqqd sqd sqq dsq dsdsq dsq dsqsqdq sq",
      progres: 11,
      size: 16,
      description: "ana samamaka lalalalala"
    },
    {
      id: "1",
      title: "dsqdsqsq dsqqd sqd sqq dsq dsdsq dsq dsqsqdq sq",
      progres: 11,
      size: 16,
      description: "ana samamaka lalalalala"
    },
    {
      id: "1",
      title: "dsqdsqsq dsqqd sqd sqq dsq dsdsq dsq dsqsqdq sq",
      progres: 11,
      size: 16,
      description: "ana samamaka lalalalala"
    },
    {
      id: "1",
      title: "dsqdsqsq dsqqd sqd sqq dsq dsdsq dsq dsqsqdq sq dsqdsqsq dsqqd sqd sqq dsq dsdsq dsq dsqsqdq sq dsqdsqsq dsqqd sqd sqq dsq dsdsq dsq dsqsqdq sq dsqdsqsq dsqqd sqd sqq dsq dsdsq dsq dsqsqdq sq",
      progres: 11,
      size: 16,
      description: "ana samamaka lalalalala dsqdsqsq dsqqd sqd sqq dsq dsdsq dsq dsqsqdq sq dsqdsqsq dsqqd sqd sqq dsq dsdsq dsq dsqsqdq sq dsqdsqsq dsqqd sqd sqq dsq dsdsq dsq dsqsqdq sq dsqdsqsq dsqqd sqd sqq dsq dsdsq dsq dsqsqdq sq dsqdsqsq dsqqd sqd sqq dsq dsdsq dsq dsqsqdq sq dsqdsqsq dsqqd sqd sqq dsq dsdsq dsq dsqsqdq sq dsqdsqsq dsqqd sqd sqq dsq dsdsq dsq dsqsqdq sq dsqdsqsq dsqqd sqd sqq dsq dsdsq dsq dsqsqdq sq"
    },
  ]
}
