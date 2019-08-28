import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';


/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-data-table',
  styleUrls: ['data-table.component.scss'],
  templateUrl: 'data-table.component.html',
})
export class DataTableComponent implements OnInit {


  displayedColumns = ['item', 'quantity', 'state', 'action'];



  @ViewChild(MatSort, {static: true}) sort: MatSort;


  ngOnInit() {
    
  }
}

