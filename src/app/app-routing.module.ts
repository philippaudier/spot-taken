import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendrierComponent } from './calendar/calendrier.component';
import { ReservationComponent } from './bookings/reservation.component';
import { LivreComponent } from './golden-book/livre.component';
import { InfosComponent } from './infos/infos.component';
import { DataTableComponent } from './inventory/data-table.component';

const routes: Routes = [
  { path: 'calendrier', component: CalendrierComponent },
  { path: 'data-table', component: DataTableComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'livre', component: LivreComponent },
  { path: 'infos', component: InfosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
