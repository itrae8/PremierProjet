import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/model/personne.model';
import { PersonneService } from '../personne.service';

@Component({
  selector: 'app-liste-personnes',
  templateUrl: './liste-personnes.component.html',
  styleUrls: ['./liste-personnes.component.scss']
})
export class ListePersonnesComponent implements OnInit {

  personnes: Personne[] = [];

  constructor(private personneService: PersonneService,
    private router: Router) {
  }

  ngOnInit() {
    this.personnes = this.personneService.getPersonnes();
  }

  renommerPersonne(personne: Personne, nouveauNom: string) {
    personne.nom = nouveauNom;
  }

  ouvertureDetailsPersonne(personne: Personne) {
    this.personneService.setPersonneSelectionneeObs(personne);
    this.router.navigate(['liste', 'personne']);
  }

}
