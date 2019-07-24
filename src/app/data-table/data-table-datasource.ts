import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DataTableItem {
  name: string;
  number: number;
  state: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [
  {number: 1, name: 'Chaise', state: 'Neuf'},
  {number: 2, name: 'Assiette', state: 'Bon'},
  {number: 3, name: 'Verre', state: 'Bon'},
  {number: 4, name: 'Fourchette', state: 'Bon'},
  {number: 5, name: 'Cuillère', state: 'Mauvais'},
  {number: 6, name: 'Bol', state: 'Usé'},
  {number: 7, name: 'Micro-onde', state: 'Usé'},
  {number: 8, name: 'Frigo', state: 'Neuf'},
  {number: 9, name: 'Casserole', state: 'Neuf'},
  {number: 10, name: 'Lampe torche', state: 'Bon'},
  {number: 11, name: 'Parapluie', state: 'Neuf'},
  {number: 12, name: 'Table basse', state: 'Bon'},
  {number: 13, name: 'Miroir', state: 'Bon'},
  {number: 14, name: 'Aspirateur', state: 'Bon'},
  {number: 15, name: 'Bouteille de gaz', state: 'Neuf'},
  {number: 16, name: 'Vélo', state: 'Mauvais'},
  {number: 17, name: 'Cuillère à soupe', state: 'Usé'},
  {number: 18, name: 'Poele', state: 'Mauvais'},
  {number: 19, name: 'Voiture', state: 'Neuf'},
  {number: 20, name: 'Avion', state: 'Neuf'},
];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<DataTableItem> {
  data: DataTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;
  filter: string;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-snumbere). If you're using server-snumbere pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-snumbere). If you're using server-snumbere sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'number': return compare(+a.number, +b.number, isAsc);
        case 'state': return compare(a.state, b.state, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example number/Name columns (for client-snumbere sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
