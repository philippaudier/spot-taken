import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


export interface ListeInventaire {
  id: number;
  item: string;
  quantity: number;
  state: string;
}

const ELEMENT_DATA: ListeInventaire[] = [
  {id: 1, item: 'Chaise',  quantity: 4, state: 'Neuf'},
  {id: 2, item: 'Bol',  quantity: 2, state: 'Bon'},
  {id: 3, item: 'Cuillère',  quantity: 6, state: 'Neuf'},
  {id: 4, item: 'Fourchette',  quantity: 6, state: 'Bon'},
  /* {id: 5, item: 'Couteau',  quantity: 6, state: 'Bon'},
  {id: 6, item: 'Cuillère à soupe',  quantity: 3, state: 'Usé'},
  {id: 7, item: 'Verre',  quantity: 8, state: 'Bon'},
  {id: 8, item: 'Assiette',  quantity: 6, state: 'Bon'},
  {id: 9, item: 'Casserole',  quantity: 2, state: 'Usé'},
  {id: 10, item: 'Saladier',  quantity: 1, state: 'Neuf'},
  {id: 11, item: 'Verre à pied',  quantity: 4, state: 'Bon'},
  {id: 12, item: 'Balais',  quantity: 2, state: 'Bon'},
  {id: 13, item: 'Casse-noix',  quantity: 1, state: 'Usé'},
  {id: 14, item: 'Passoire',  quantity: 2, state: 'Bon'},
  {id: 15, item: 'Louche',  quantity: 1, state: 'Bon'},
  {id: 16, item: 'Micro onde',  quantity: 1, state: 'Neuf'},
  {id: 17, item: 'Lampe de bureau',  quantity: 2, state: 'Usé'},
  {id: 18, item: 'Machine à laver',  quantity: 1, state: 'Bon'},
  {id: 19, item: 'Sèche cheveux',  quantity: 1, state: 'Bon'},
  {id: 20, item: 'Carafe',  quantity: 1, state: 'Neuf'}, */
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
  displayedColumns = ['id', 'item', 'quantity', 'state', 'action'];
  data = Object.assign( ELEMENT_DATA);
  dataSource = new MatTableDataSource(this.data);
  selection = new SelectionModel<Element>(true, []);

  item: string;
  quantity: number;
  state: string;

  constructor(public dialog: MatDialog) {}

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  deleteRow(row) {
    const index = this.data.findIndex(obj => obj === row);
    this.data.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
    this.dataSource.sort = this.sort;
  }

  addRow() {
    ELEMENT_DATA.push({id: 1, item: this.item, quantity: this.quantity, state: this.state});
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

}

