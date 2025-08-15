import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorfulBg]',
  standalone: false
})
export class ColorfulBg {

 constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'red';
  }

}
