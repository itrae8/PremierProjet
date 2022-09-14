import { Component, OnInit } from '@angular/core';
import { interval, tap } from 'rxjs';
import { ComponentParentComponent } from '../component-parent/component-parent.component';

@Component({
  selector: 'app-deuxieme-component',
  templateUrl: './deuxieme-component.component.html',
  styleUrls: ['./deuxieme-component.component.scss']
})
export class DeuxiemeComponentComponent extends ComponentParentComponent implements OnInit {

  interval$ = interval(1000).pipe(
    tap(valeur => console.log(valeur)
    )
  );

  constructor() {
    super();
  }

  override ngOnInit(): void {
  }

  override incrementNbrClick(event: Event) {
    this.nbrClick += 2;
    console.log(event)
  }


}
