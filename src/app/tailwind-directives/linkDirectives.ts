import { Directive, ElementRef, OnInit } from '@angular/core';
import { linkLarge, linkRegular, linkSmall } from './classes';

@Directive({
  selector: '[linkRegular]' // Selector to match the attribute name
})
export class LinkRegularDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const element = this.elementRef.nativeElement;
    element.classList.add(...linkRegular);
  }
}


@Directive({
    selector: '[linkSmall]' // Selector to match the attribute name
  })
  export class LinkSmallDirective implements OnInit {
    constructor(private elementRef: ElementRef) {}
  
    ngOnInit() {
      const element = this.elementRef.nativeElement;
      element.classList.add(...linkSmall);
    }
  }



  @Directive({
    selector: '[linkLarge]' // Selector to match the attribute name
  })
  export class LinkLargeDirective implements OnInit {
    constructor(private elementRef: ElementRef) {}
  
    ngOnInit() {
      const element = this.elementRef.nativeElement;
      element.classList.add(...linkLarge);
    }
  }