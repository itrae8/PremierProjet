import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActeurComponent } from './acteur/acteur.component';
import { FilmsComponent } from './films/films.component';

const routes: Routes = [
  {
    path: '', component: FilmsComponent,
  },{
    path: 'acteur/:id', component : ActeurComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmRoutingModule { }