import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { TableFiltering } from './inventaire/inventaire.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { LivreComponent } from './livre/livre.component';
import { InfosComponent } from './infos/infos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    CalendrierComponent,
    TableFiltering,
    ReservationsComponent,
    LivreComponent,
    InfosComponent,
    TableFiltering
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
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
