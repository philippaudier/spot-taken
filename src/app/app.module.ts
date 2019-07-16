import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { InventaireComponent } from './inventaire/inventaire.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { LivreComponent } from './livre/livre.component';
import { InfosComponent } from './infos/infos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CalendrierComponent,
    InventaireComponent,
    ReservationsComponent,
    LivreComponent,
    InfosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
