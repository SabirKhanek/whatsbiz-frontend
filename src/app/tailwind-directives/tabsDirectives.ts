import { Directive, ElementRef, OnInit } from '@angular/core';
import { highlightedTab, tab } from './classes';

@Directive({
  selector: '[tab]' // Selector to match the attribute name
})
export class TabDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const element = this.elementRef.nativeElement;
    element.classList.add(...tab);
  }
}


@Directive({
    selector: '[highlightedTab]' // Selector to match the attribute name
  })
  export class HighlightedTabDirective implements OnInit {
    constructor(private elementRef: ElementRef) {}
  
    ngOnInit() {
      const element = this.elementRef.nativeElement;
      element.classList.add(...highlightedTab);
    }
  }



 