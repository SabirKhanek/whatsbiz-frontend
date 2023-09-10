import { Directive, ElementRef, OnInit } from '@angular/core';
import { inputLarge, inputRegular, inputSmall, radioRegular, selectRegular, selectRegularDropdown } from './classes';

@Directive({
  selector: '[inputRegular]' // Selector to match the attribute name
})
export class InputRegularDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const element = this.elementRef.nativeElement;
    element.classList.add(...inputRegular);
  }
}


@Directive({
    selector: '[inputSmall]' // Selector to match the attribute name
  })
  export class InputSmallDirective implements OnInit {
    constructor(private elementRef: ElementRef) {}
  
    ngOnInit() {
      const element = this.elementRef.nativeElement;
      element.classList.add(...inputSmall);
    }
  }



  @Directive({
    selector: '[inputLarge]' // Selector to match the attribute name
  })
  export class InputLargeDirective implements OnInit {
    constructor(private elementRef: ElementRef) {}
  
    ngOnInit() {
      const element = this.elementRef.nativeElement;
      element.classList.add(...inputLarge);
    }
  }

  @Directive({
    selector: '[radioRegular]' // Selector to match the attribute name
  })
  export class RadioRegularDirective implements OnInit {
    constructor(private elementRef: ElementRef) {}
  
    ngOnInit() {
      const element = this.elementRef.nativeElement;
      element.classList.add(...radioRegular);
    } 
  }
 
 
  @Directive({
    selector: '[selectRegular]' // Selector to match the attribute name
  })
  export class SelectRegularDirective implements OnInit {
    constructor(private elementRef: ElementRef) {}
  
    ngOnInit() {
      const element = this.elementRef.nativeElement;
      element.classList.add(...selectRegular);
    } 
  }

  @Directive({
    selector: '[selectRegularDropdown]' // Selector to match the attribute name
  })
  export class SelectRegularDropdownDirective implements OnInit {
    constructor(private elementRef: ElementRef) {}
  
    ngOnInit() {
      const element = this.elementRef.nativeElement;
      element.classList.add(...selectRegularDropdown);
    } 
  }