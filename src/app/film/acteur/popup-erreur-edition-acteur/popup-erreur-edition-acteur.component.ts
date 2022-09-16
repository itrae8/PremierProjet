import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-popup-erreur-edition-acteur',
  templateUrl: './popup-erreur-edition-acteur.component.html',
  styleUrls: ['./popup-erreur-edition-acteur.component.scss']
})
export class PopupErreurEditionActeurComponent implements OnInit {
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
 ) { }
 
 ngOnInit() {
   // will log the entire data object
   console.log(this.data)
 }
}
