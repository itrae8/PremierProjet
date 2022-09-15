import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ActeurComponent } from './acteur/acteur.component';
import { FilmRoutingModule } from './film-routing.module';
import { FilmsComponent } from './films/films.component';

@NgModule({
  declarations: [FilmsComponent, ActeurComponent],
  imports: [
    CommonModule,
    FilmRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    // Ne pas oublier FormsModule pour faire fonctionner le colorPicker
    ReactiveFormsModule,
    FormsModule,
    ColorPickerModule,
  ],
})
export class FilmModule {}
