import {Component} from '@angular/core';

export interface inventaire {
  name: string;
  number: number;
  state: string;
}

const ELEMENT_DATA: inventaire[] = [
  {name: 'Verre', number: 8, state: 'B'},
  {name: 'Chaise', number: 4, state: 'N'},
  {name: 'Couteau', number: 8, state: 'B'},
  {name: 'Bol', number: 2, state: 'B'},
  {name: 'Balais', number: 2, state: 'U'},
  {name: 'Porte savon', number: 1, state: 'B'},
  {name: 'Parapluie', number: 1, state: 'B'},
  {name: 'Poubelle', number: 2, state: 'N'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-inventaire',
  styleUrls: ['inventaire.component.scss'],
  templateUrl: 'inventaire.component.html',
})
export class TableBasic {
  displayedColumns: string[] = ['name', 'number', 'state'];
  dataSource = ELEMENT_DATA;
}