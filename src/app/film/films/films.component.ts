import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { delay, forkJoin, Observable, tap } from 'rxjs';
import { ActeurFilm } from 'src/app/model/acteur.model';
import { Film, FilmListe } from 'src/app/model/film.model';
import { ActeurService } from 'src/app/shared/acteur.service';
import { FilmService } from 'src/app/shared/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent implements OnInit {
  films$!: Observable<any>;

  displayedColumns = ['nom', 'acteurs'];

  displayedTilteColumns = ['Titre', 'Acteurs'];

  dataSource!: MatTableDataSource<FilmListe>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  color = '#FF0000';

  idFilmACreer = '';
  nomDuFilmACreer = '';
  acteursDuFilmAcreer = [];

  listeActeurs: ActeurFilm[] = [];

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
        let filmsListe = films.map((film) => {
          let acteursAvecNom: ActeurFilm[] = film.acteurs.map((idActeur) => {
            return {
              id: idActeur,
              nom: acteurs.find((acteurListe) => idActeur === acteurListe.id)
                ?.nom!,
            };
          });
          return { ...film, acteurs: acteursAvecNom };
        });
        this.dataSource = new MatTableDataSource(filmsListe);
        this.dataSource.paginator = this.paginator;

        this.dataSource.data.forEach((film: FilmListe) => {
          //Fait des doublons
          //this.listeActeurs = this.listeActeurs.concat(film.acteurs);

          this.listeActeurs = this.listeActeurs.concat(
            film.acteurs.filter(
              (filmActeur) =>
                !this.listeActeurs.find(
                  (acteurListe) => acteurListe.id === filmActeur.id
                )
            )
          );
        });
      })
    );
  }

  creerFilm() {
    let film: Film = {
      id: this.idFilmACreer,
      nom: this.nomDuFilmACreer,
      acteurs: this.acteursDuFilmAcreer
    };
    this.filmService.postFilm(film).pipe(
      tap(filmResultatRequete => {
        let listActeurAvecNom = filmResultatRequete.acteurs.map(idActeur => 
          this.listeActeurs.find(acteurListe => acteurListe.id === idActeur)!);
        
        let newData = [...this.dataSource.data, {...filmResultatRequete, acteurs : listActeurAvecNom}];

        // Nécessaire pour mettre à jour le tableau (sans réaffection de la dataSource, le tableau ne se met pas à jour)
        this.dataSource.data = newData;
      })
    ).subscribe();
  }
}
