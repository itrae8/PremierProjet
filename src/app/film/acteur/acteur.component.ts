import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, EMPTY, Observable, take, tap } from 'rxjs';
import { Acteur, ActeurFilm } from 'src/app/model/acteur.model';
import { ActeurService } from 'src/app/core/services/acteur.service';

import { AbstractControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PopupErreurEditionActeurComponent } from './popup-erreur-edition-acteur/popup-erreur-edition-acteur.component';

export function NoNegativeNumbers(control: AbstractControl) {
  return control.value < 0 ? { negativeNumber: true } : null;
}

const pasDItalienTropJeuneValidator: ValidatorFn = (
  control: AbstractControl
) => {
  const ageControl = control.get('age')?.value;
  const nationaliteControl = control.get('nationalite')?.value;

  if (ageControl < 18 && nationaliteControl === 'IT') {
    return { errorAgeItalienTropJeune: true };
  }
  return null;
};

@Component({
  selector: 'app-acteur',
  templateUrl: './acteur.component.html',
  styleUrls: ['./acteur.component.scss'],
})
export class ActeurComponent implements OnInit {
  acteur$!: Observable<Acteur>;

  acteurInitial!: Acteur;

  formGroup!: FormGroup;

  constructor(
    private acteurService: ActeurService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.acteur$ = this.acteurService
      // Refait l'appel au back (hors sessionStorage) du coup remettra l'ancien nom d'acteur
      .getActeur(this.route.snapshot.paramMap.get('id')!)
      .pipe(
        take(1),
        tap((acteur) => {
          this.acteurInitial = acteur;
          this.formGroup = this.formBuilder.group(
            {
              id: acteur.id,
              nom: [acteur.nom, [Validators.required]],
              age: [acteur.age, [Validators.required, NoNegativeNumbers]],
              nationalite: [
                acteur.nationalite,
                [Validators.required, Validators.maxLength(2)],
              ],
            },
            { validators: [pasDItalienTropJeuneValidator] }
          );
        })
      );
  }

  onSubmitForm() {
    this.acteurService
      .patchActeur(this.formGroup.value)
      .pipe(
        tap((acteur: Acteur) => {
          let filmsSessionStorage = sessionStorage.getItem('films');
          let acteursSessionStorage = sessionStorage.getItem('acteurs');

          if (filmsSessionStorage && acteursSessionStorage) {
            // On ne change pas l'id, il faut changer l'information du nom de l'acteur pour le répercuter sur la liste
            let acteurs = JSON.parse(acteursSessionStorage) as ActeurFilm[];

            let indexActeur = acteurs.findIndex(
              (acteurSessionStorage) => acteurSessionStorage.id === acteur.id
            );
            acteurs[indexActeur] = acteur;

            sessionStorage.setItem('acteurs', JSON.stringify(acteurs));
          }

          this.router.navigate(['films']);
        }),
        catchError(err =>  {
          console.error(err);
          this.openDialog()
          return EMPTY;
        })
      )
      .subscribe();
  }

  openDialog() {
    const dialogRef = this.dialog.open(PopupErreurEditionActeurComponent, {
      width: '330px',
      height: '250px',
      data: {
        acteur: this.acteurInitial,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
