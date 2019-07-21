import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Moment } from 'moment';
import * as moment from 'moment';
import { MatCalendar, MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.scss']
})
export class CalendrierComponent implements OnInit, AfterViewInit {


  @ViewChild('calendar', { static: false })
  matCalendar: MatCalendar<Moment>;

  constructor(public httpClient: HttpClient) { }

  ngAfterViewInit(): void {
    console.log(this.matCalendar);
  }

  dateFilter(date: Moment) {
    let today = moment();
    let threeDaysAgo = moment().subtract(3, 'day');
    let inThreeDays = moment().add(3, 'day');

    if (date.isBefore(threeDaysAgo) || date.isAfter(inThreeDays)) {
      return true;
    } else {
      return false;
    }
  }

  dateClassFunction(date: Moment): MatCalendarCellCssClasses {
    let today = moment();
    let threeDaysAgo = moment().subtract(3, 'day');
    let inThreeDays = moment().add(3, 'day');

    if (date.isBefore(threeDaysAgo) || date.isAfter(inThreeDays)) {
      return;
    } else if (date.isSame(today, 'day')) {
      return 'selected-period';
    } else {
      return 'unavailable-date-cell';
    }  
  }

  ngOnInit() {
    this.httpClient.get('/api/testwebservice')
      .toPromise()
      .then((result) => {
        console.log(result);
      }, (error) => {
        console.error(error);
      })
  }

  onSelect(selectedDate: Moment) {

    console.log(selectedDate);


  }
}
