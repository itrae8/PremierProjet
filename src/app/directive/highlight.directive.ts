import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef) { 
  }

  @HostListener("click", ["$event"]) onClick() {
    this.elementRef.nativeElement.setAttribute('style', 'color: white; background: red');
  }

}
