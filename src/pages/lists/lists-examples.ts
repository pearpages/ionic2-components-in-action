import { Component } from '@angular/core';


@Component({
  selector: 'page-lists-examples',
  templateUrl: 'lists-examples.html'
})
export class ListsExamples {

  items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];

  selected: string;

  constructor() {

  }

  itemSelected(item) {
    this.selected = item;
  }
}
