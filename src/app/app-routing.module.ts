import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeuxiemeComponentComponent } from './personne/deuxieme-component/deuxieme-component.component';

const routes: Routes = [
  {
    path: 'liste',
    loadChildren: () => import('./personne/personne.module')
      .then(module => module.PersonneModule)
  },
  { path: 'deuxiemeComponent', component: DeuxiemeComponentComponent },
  {
    path: 'films', loadChildren: () => import('./film/film.module')
      .then(module => module.FilmModule)
  },
  { path: '', redirectTo: '/liste', pathMatch: 'full' },
  { path: '**', component: DeuxiemeComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
