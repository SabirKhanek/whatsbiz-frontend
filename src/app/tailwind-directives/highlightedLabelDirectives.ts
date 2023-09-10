import { Directive, ElementRef, OnInit } from '@angular/core';
import { highlightedlabelLarge, highlightedlabelRegular, highlightedlabelSmall } from './classes';

@Directive({
  selector: '[highlightedlabelRegular]' // Selector to match the attribute name
})
export class HighlightedLabelRegularDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const element = this.elementRef.nativeElement;
    element.classList.add(...highlightedlabelRegular);
  }
}


@Directive({
    selector: '[highlightedlabelSmall]' // Selector to match the attribute name
  })
  export class HighlightedLabelSmallDirective implements OnInit {
    constructor(private elementRef: ElementRef) {}
  
    ngOnInit() {
      const element = this.elementRef.nativeElement;
      element.classList.add(...highlightedlabelSmall);
    }
  }



  @Directive({
    selector: '[highlightedlabelLarge]' // Selector to match the attribute name
  })
  export class HighlightedlabelLargeDirective implements OnInit {
    constructor(private elementRef: ElementRef) {}
  
    ngOnInit() {
      const element = this.elementRef.nativeElement;
      element.classList.add(...highlightedlabelLarge);
    }
  }