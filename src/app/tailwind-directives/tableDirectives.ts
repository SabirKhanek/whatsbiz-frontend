import { Directive, ElementRef, OnInit } from '@angular/core';
import { tableHeader, tableCell, tableClickableCell } from './classes';

@Directive({
  selector: '[tableHeader]' // Selector to match the attribute name
})
export class TableHeaderDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const element = this.elementRef.nativeElement;
    element.classList.add(...tableHeader);
  }
}


@Directive({
    selector: '[tableCell]' // Selector to match the attribute name
  })
  export class TableCellDirective implements OnInit {
    constructor(private elementRef: ElementRef) {}
  
    ngOnInit() {
      const element = this.elementRef.nativeElement;
      element.classList.add(...tableCell);
    }
  }


  @Directive({
    selector: '[tableClickableCell]' // Selector to match the attribute name
  })
  export class TableClickableCellDirective implements OnInit {
    constructor(private elementRef: ElementRef) {}
  
    ngOnInit() {
      const element = this.elementRef.nativeElement;
      element.classList.add(...tableClickableCell);
    }
  }



