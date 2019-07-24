import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface ListeInventaire {
  item: string;
  nombre: number;
  etat: string;
}

const ELEMENT_DATA: ListeInventaire[] = [
  {item: 'Chaise', nombre: 4, etat: 'Bon'},
  {item: 'Bol', nombre: 2, etat: 'Bon'},
  {item: 'Cuillère', nombre: 6, etat: 'Neuf'},
  {item: 'Fourchette', nombre: 6, etat: 'Bon'},
  {item: 'Couteau', nombre: 6, etat: 'Bon'},
  {item: 'Cuillère soupe', nombre: 3, etat: 'Usé'},
  {item: 'Verre', nombre: 8, etat: 'Bon'},
  {item: 'Assiette', nombre: 6, etat: 'Bon'},
  {item: 'Casserole', nombre: 2, etat: 'Mauvais'},
  {item: 'Saladier', nombre: 1, etat: 'Neuf'},
  {item: 'Chaise', nombre: 4, etat: 'Bon'},
  {item: 'Bol', nombre: 2, etat: 'Bon'},
  {item: 'Cuillère', nombre: 6, etat: 'Neuf'},
  {item: 'Fourchette', nombre: 6, etat: 'Bon'},
  {item: 'Couteau', nombre: 6, etat: 'Bon'},
  {item: 'Cuillère soupe', nombre: 3, etat: 'Usé'},
  {item: 'Verre', nombre: 8, etat: 'Bon'},
  {item: 'Assiette', nombre: 6, etat: 'Bon'},
  {item: 'Casserole', nombre: 2, etat: 'Mauvais'},
  {item: 'Saladier', nombre: 1, etat: 'Neuf'},
  {item: 'Chaise', nombre: 4, etat: 'Bon'},
  {item: 'Bol', nombre: 2, etat: 'Bon'},
  {item: 'Cuillère', nombre: 6, etat: 'Neuf'},
  {item: 'Fourchette', nombre: 6, etat: 'Bon'},
  {item: 'Couteau', nombre: 6, etat: 'Bon'},
  {item: 'Cuillère soupe', nombre: 3, etat: 'Usé'},
  {item: 'Verre', nombre: 8, etat: 'Bon'},
  {item: 'Assiette', nombre: 6, etat: 'Bon'},
  {item: 'Casserole', nombre: 2, etat: 'Mauvais'},
  {item: 'Saladier', nombre: 1, etat: 'Neuf'},
];

/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-data-table',
  styleUrls: ['data-table.component.scss'],
  templateUrl: 'data-table.component.html',
})
export class DataTableComponent implements OnInit {
  displayedColumns: string[] = ['item', 'nombre', 'etat'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}

