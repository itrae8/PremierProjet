import { Component } from '@angular/core';
import { BehaviorSubject, EMPTY, filter, iif, interval, map, mergeMap, of, Subject, switchMap, tap } from 'rxjs';
import { Personne } from './model/personne.model';
import { PersonneService } from './personne/personne.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PremierProjet';

  subjectNotificationTimer$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  interval$ = this.subjectNotificationTimer$.pipe(
    switchMap(valeur =>
      iif(
        () => valeur != false,
        interval(1000).pipe(tap(valeurTimer => console.log(`valeur timer : ${valeurTimer}`))),
        of('Timer désactivé'))
    )
  );


  constructor() { }

  ngOnInit() {
  }

  activerEtDesactiverTimer() {
    this.subjectNotificationTimer$.next(!this.subjectNotificationTimer$.value);
  }
}
