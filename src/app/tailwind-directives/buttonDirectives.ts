import { Directive, ElementRef, OnInit } from '@angular/core';
import { buttonLarge, buttonRegular, buttonSmall } from './classes';

@Directive({
  selector: '[buttonRegular]' // Selector to match the attribute name
})
export class ButtonRegularDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const element = this.elementRef.nativeElement;
    element.classList.add(...buttonRegular);
  }
}

@Directive({
  selector: '[buttonSmall]' // Selector to match the attribute name
})
export class ButtonSmallDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const element = this.elementRef.nativeElement;
    element.classList.add(...buttonSmall);
  }
}


@Directive({
  selector: '[buttonLarge]' // Selector to match the attribute name
})
export class ButtonLargeDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const element = this.elementRef.nativeElement;
    element.classList.add(...buttonLarge);
  }
}