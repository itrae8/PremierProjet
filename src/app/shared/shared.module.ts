import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HighlightDirective } from '../directive/highlight.directive';
import { ExponentielPipe } from '../pipe/exponentiel.pipe';



@NgModule({
  declarations: [
    HighlightDirective,
    ExponentielPipe
  ],
  exports: [
    HighlightDirective,
    ExponentielPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
