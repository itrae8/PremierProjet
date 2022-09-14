import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, take, tap } from 'rxjs';
import { Acteur } from 'src/app/model/acteur.model';
import { ActeurService } from 'src/app/shared/acteur.service';

@Component({
  selector: 'app-acteur',
  templateUrl: './acteur.component.html',
  styleUrls: ['./acteur.component.scss']
})
export class ActeurComponent implements OnInit {

  acteur!: Acteur;

  acteur$!: Observable<Acteur>;

  constructor(private acteurService: ActeurService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.acteur$ = this.acteurService.getActeur(this.route.snapshot.paramMap.get('id')!).pipe(
      take(1),
      tap(valeur => this.acteur = valeur)
    )
    ;
  }

}
