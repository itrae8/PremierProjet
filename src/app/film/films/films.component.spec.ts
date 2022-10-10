import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActeurService } from '../../core/services/acteur.service';
import { FilmService } from '../../core/services/film.service';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorPickerModule } from 'primeng/colorpicker';
import { of, tap } from 'rxjs';
import { FilmsComponent } from './films.component';

describe('FilmsComponent', () => {
  let component: FilmsComponent;
  let fixture: ComponentFixture<FilmsComponent>;
  let filmService: FilmService;
  let acteurService: ActeurService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmsComponent],
      imports: [
        HttpClientTestingModule,
        // Sont nécessaire pour enlever les console error lors de l'exécution des tests
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatInputModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        ColorPickerModule,
        BrowserAnimationsModule,
        FormsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsComponent);
    component = fixture.componentInstance;
    acteurService = TestBed.inject(ActeurService);
    filmService = TestBed.inject(FilmService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all data', (done) => {
    const spyFilms = jest.spyOn(filmService, 'getFilms');
    const spyActeurs = jest.spyOn(acteurService, 'getActeurs');

    spyFilms.mockReturnValue(
      of([
        {
          id: 'heat',
          nom: 'Heat',
          acteurs: ['al-pacino'],
        },
      ])
    );

    spyActeurs.mockReturnValue(
      of([
        {
          id: 'al-pacino',
          nom: 'Al Pacino',
        },
      ])
    );

    // On rappelle la méthode ici car nous avons redéfini les observables
    // la méthode ngOnInit est appelée à chaque début de test
    component.ngOnInit();

    component.films$
      .pipe(
        tap(() => {
          expect(component.dataSource.data).toEqual([
            {
              id: 'heat',
              nom: 'Heat',
              acteurs: [
                {
                  id: 'al-pacino',
                  nom: 'Al Pacino',
                },
              ],
            },
          ]);
          // La méthode done s'appelle ici pour finir le test (celui-ci attends son appel avant de s'arrêter)
          // est nécessaire à cause du delay(0) de la méthode ngOnInit, pas nécessaire lors d'observables sans delai
          done();
        })
      )
      .subscribe();
  });
});
