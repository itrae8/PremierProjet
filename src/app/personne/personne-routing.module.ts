import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonneGuard } from '../core/personne.guard';
import { ListePersonnesComponent } from './liste-personnes/liste-personnes.component';
import { PremierComponentComponent } from './premier-component/premier-component.component';
import { TroisiemeComponent } from './troisieme/troisieme.component';

const routes: Routes = [
  {
    path: '', component: ListePersonnesComponent,
    children: [
      { path: 'personne', component: PremierComponentComponent },
      //{ path: 'personne/:nom', canActivate: [PersonneGuard], component: PremierComponentComponent },
      { path: 'troisiemecomponent', component: TroisiemeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonneRoutingModule { }