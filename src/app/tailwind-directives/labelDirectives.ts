import { Directive, ElementRef, OnInit } from '@angular/core';
import { labelLarge, labelRegular, labelSmall } from './classes';

@Directive({
  selector: '[labelRegular]' // Selector to match the attribute name
})
export class LabelRegularDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const element = this.elementRef.nativeElement;
    element.classList.add(...labelRegular);
  }
}


@Directive({
    selector: '[labelSmall]' // Selector to match the attribute name
  })
  export class LabelSmallDirective implements OnInit {
    constructor(private elementRef: ElementRef) {}
  
    ngOnInit() {
      const element = this.elementRef.nativeElement;
      element.classList.add(...labelSmall);
    }
  }



  @Directive({
    selector: '[labelLarge]' // Selector to match the attribute name
  })
  export class labelLargeDirective implements OnInit {
    constructor(private elementRef: ElementRef) {}
  
    ngOnInit() {
      const element = this.elementRef.nativeElement;
      element.classList.add(...labelLarge);
    }
  }