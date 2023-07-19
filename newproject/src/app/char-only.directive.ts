import { Directive, HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCharOnly]'
})
export class CharOnlyDirective {

  constructor(private elementRef:ElementRef) { }
  @HostListener('input',['$event'])
  onInputChange()//this is custom method
  {
    console.log('directive call...');
    let initialInputBoxValue = this.elementRef.nativeElement.value;
    console.log(initialInputBoxValue);
    this.elementRef.nativeElement.value=initialInputBoxValue.replace(/[^a-zA-Z ]*/g)
  }

}
