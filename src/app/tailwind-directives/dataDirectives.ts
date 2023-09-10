import { Directive, ElementRef, OnInit } from '@angular/core';
import { dataLarge, dataRegular, dataSmall } from './classes';

@Directive({
  selector: '[dataRegular]' // Selector to match the attribute name
})
export class DataRegularDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const element = this.elementRef.nativeElement;
    element.classList.add(...dataRegular);
  }
}


@Directive({
    selector: '[dataSmall]' // Selector to match the attribute name
  })
  export class DataSmallDirective implements OnInit {
    constructor(private elementRef: ElementRef) {}
  
    ngOnInit() {
      const element = this.elementRef.nativeElement;
      element.classList.add(...dataSmall);
    }
  }



  @Directive({
    selector: '[dataLarge]' // Selector to match the attribute name
  })
  export class dataLargeDirective implements OnInit {
    constructor(private elementRef: ElementRef) {}
  
    ngOnInit() {
      const element = this.elementRef.nativeElement;
      element.classList.add(...dataLarge);
    }
  }