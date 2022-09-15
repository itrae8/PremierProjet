import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { delay, forkJoin, Observable, tap } from 'rxjs';
import { Acteur, ActeurFilm } from 'src/app/model/acteur.model';
import { Film, FilmListe } from 'src/app/model/film.model';
import { ActeurService } from 'src/app/shared/acteur.service';
import { FilmService } from 'src/app/shared/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent implements OnInit {
  films: FilmListe[] = [];

  films$!: Observable<any>;

  displayedColumns = ['nom','acteurs']

  displayedTilteColumns = ['Titre','Acteurs']

  dataSource!: MatTableDataSource<FilmListe>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private filmService: FilmService,
    private acteurService: ActeurService
  ) {}

  ngOnInit(): void {
    this.films$ = forkJoin({
      films: this.filmService.getFilms(),
      acteurs: this.acteurService.getActeurs(),
    }).pipe(
      // Renvoie la valeur émise après 500ms de délai
      delay(500),
      tap(({ films, acteurs }) => {
        this.films = films.map(film => {
         let acteursAvecNom: ActeurFilm[] = film.acteurs.map(idActeur => {
            return { id: idActeur, nom : acteurs.find(acteurListe => idActeur === acteurListe.id)?.nom!};
          });
          return {...film, acteurs: acteursAvecNom};
        });
        this.dataSource = new MatTableDataSource(this.films);
        this.dataSource.paginator = this.paginator;
      })
    );
  }

}
