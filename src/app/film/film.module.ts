import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmRoutingModule } from './film-routing.module';
import { FilmsComponent } from './films/films.component';
import { ActeurComponent } from './acteur/acteur.component';

@NgModule({
  declarations: [FilmsComponent, ActeurComponent],
  imports: [
    CommonModule,
    FilmRoutingModule
  ]
})
export class FilmModule { }
