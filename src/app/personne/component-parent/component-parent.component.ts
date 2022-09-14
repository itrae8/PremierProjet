import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../../model/personne.model';

@Component({
  selector: 'app-component-parent',
  templateUrl: './component-parent.component.html',
  styleUrls: ['./component-parent.component.scss']
})
export class ComponentParentComponent implements OnInit {

  nom: string = 'Johnny Depp';
  age: number = 58;
  dateDeNaissance: Date = new Date();
  attributSantInit!: any;

  @Input() personne!: Personne;

  nbrClick = 0;

  imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/7/79/Johnny_Depp_Deauville_2019.jpg';

  inputValue : any = "Saisir une info";

  @Output() renommageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  incrementNbrClick(event: Event) {
    this.nbrClick++;
    console.log(event)
  }

}
