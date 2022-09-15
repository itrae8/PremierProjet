import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ActeurComponent } from './acteur/acteur.component';
import { FilmRoutingModule } from './film-routing.module';
import { FilmsComponent } from './films/films.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [FilmsComponent, ActeurComponent],
  imports: [
    CommonModule,
    FilmRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
  ],
})
export class FilmModule {}
