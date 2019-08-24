// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

// agm module
import { AgmCoreModule } from '@agm/core';

// components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendrierComponent } from './calendar/calendrier.component';
import { ReservationComponent } from './bookings/reservation.component';
import { LivreComponent } from './golden-book/livre.component';
import { InfosComponent } from './infos/infos.component';
import { DataTableComponent } from './inventory/data-table.component';
import { DividerComponent } from './components/divider/divider.component';
import { InputCommentComponent } from './components/input-comment/input-comment.component';
import { FabButtonComponent } from './components/fab-button/fab-button.component';
import { BookingCardComponent } from './bookings/booking-card/booking-card.component';

// svg icon module
import { AngularSvgIconModule } from 'angular-svg-icon';

// carousel module and the slider component
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './infos/carousel/carousel.component';

// mat-module
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { SatPopoverModule } from '@ncstate/sat-popover';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    CalendrierComponent,
    ReservationComponent,
    LivreComponent,
    InfosComponent,
    DataTableComponent,
    DividerComponent,
    InputCommentComponent,
    FabButtonComponent,
    BookingCardComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatRippleModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatDividerModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    MatInputModule,
    CarouselModule,
    RouterModule.forRoot([]),
    AngularSvgIconModule,
    SatPopoverModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
