import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { InventaireComponent } from './inventaire/inventaire.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { LivreComponent } from './livre/livre.component';
import { InfosComponent } from './infos/infos.component';

const routes: Routes = [
  { path: 'calendrier', component: CalendrierComponent },
  { path: 'inventaire', component: InventaireComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'livre', component: LivreComponent },
  { path: 'infos', component: InfosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
