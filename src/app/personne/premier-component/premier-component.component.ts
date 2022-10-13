import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, filter, Observable, take, tap } from 'rxjs';
import { Personne } from 'src/app/model/personne.model';
import { ComponentParentComponent } from '../component-parent/component-parent.component';
import { PersonneService } from '../personne.service';

@Component({
  selector: 'app-premier-component',
  templateUrl: './premier-component.component.html',
  styleUrls: ['./premier-component.component.scss']
})
export class PremierComponentComponent extends ComponentParentComponent implements OnInit {

  personne$ : Observable<Personne | null> = EMPTY;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private personneService: PersonneService) {
    super();
  }

  override ngOnInit(): void {

    this.personne$ = this.personneService.getPersonneSelectionneeObs().pipe(
      filter(personne => personne != null),
      tap(personne => {
          this.personne = personne!;
          this.inputValue = this.personne.nom;
      }
      ));

    /*this.route.paramMap.subscribe(
      paramRoute => {
        const personneNom = paramRoute.get('nom');
        if (personneNom) {
          let personne = this.personneService.getPersonnes().find(personneDeLaListe => personneDeLaListe.nom === personneNom)!;
          // Nous devons émettre pour que le template html soit chargé après l'émission de la valeur de l'observable
          this.personneService.setPersonneSelectionneeObs(personne);
        }

      }
    )*/

    /* const state = window.history.state;
 
     if(state['nom']){
       this.personne = state;
       this.inputValue = this.personne.nom;
     }*/

  }

  changementValeurInput() {
    console.log('Input value : ', this.inputValue)
  }

  renommerPersonne() {
    this.renommageEvent.emit(this.inputValue);
  }

}
