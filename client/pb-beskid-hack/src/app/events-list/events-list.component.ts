import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { EventsListDataSource } from './events-list-datasource';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: EventsListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit() {
    this.dataSource = new EventsListDataSource(this.paginator, this.sort);
  }
}
