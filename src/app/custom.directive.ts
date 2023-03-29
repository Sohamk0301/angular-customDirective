import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private elem:ElementRef) { 
    elem.nativeElement.style.color="green";
    elem.nativeElement.style.background="orange";
  }

}