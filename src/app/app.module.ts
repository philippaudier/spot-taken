import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { InventaireComponent } from './inventaire/inventaire.component';
import { ReservationComponent } from './reservation/reservation.component';
import { LivreComponent } from './livre/livre.component';
import { InfosComponent } from './infos/infos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DataTableComponent } from './data-table/data-table.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { MatListModule } from '@angular/material/list';
import { ListInfoComponent } from './list-info/list-info.component';
import { MatDividerModule } from '@angular/material/divider';
import { DividerComponent } from './divider/divider.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { InputCommentComponent } from './component/input-comment/input-comment.component';
import { MatInputModule } from '@angular/material/input';
import { FabButtonComponent } from './component/fab-button/fab-button.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    CalendrierComponent,
    InventaireComponent,
    ReservationComponent,
    LivreComponent,
    InfosComponent,
    DataTableComponent,
    ExpansionPanelComponent,
    ListInfoComponent,
    DividerComponent,
    MapComponent,
    InputCommentComponent,
    FabButtonComponent
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
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatDividerModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    MatCarouselModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
