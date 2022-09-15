import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, take, tap } from 'rxjs';
import { Acteur } from 'src/app/model/acteur.model';
import { ActeurService } from 'src/app/shared/acteur.service';

@Component({
  selector: 'app-acteur',
  templateUrl: './acteur.component.html',
  styleUrls: ['./acteur.component.scss'],
})
export class ActeurComponent implements OnInit {
  acteur$!: Observable<Acteur>;

  acteurForm!: FormGroup;

  constructor(
    private acteurService: ActeurService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.acteur$ = this.acteurService
      .getActeur(this.route.snapshot.paramMap.get('id')!)
      .pipe(
        take(1),
        tap((acteur) => {
          this.acteurForm = this.formBuilder.group({
            id: acteur.id,
            nom: [acteur.nom, [Validators.required]],
            age: [acteur.age, [Validators.required]],
            nationalite: [acteur.nationalite, [Validators.required, Validators.maxLength(2)]],
          });
        })
      );
  }

  onSubmitForm(){

  }
}
