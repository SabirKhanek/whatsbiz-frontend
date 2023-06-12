import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { smallInput, regularInput, largeInput } from './inputs.classes'

@Directive({
  selector: '[appInput]'
})
export class InputDirective implements OnInit {
  @Input('appInput') fieldSize: 'small' | 'regular' | 'large' = 'regular';
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    // Apply Tailwind CSS classes to the component element
    console.log(this.fieldSize)
    this.applyClasses();
  }

  getClasses() {
    switch (this.fieldSize) {
      case 'small': return smallInput
      case 'regular': return regularInput
      case 'large': return largeInput
    }
  }

  private applyClasses(): void {
    const element = this.elementRef.nativeElement;
    // Apply Tailwind CSS classes to the element using the renderer
    element.classList.add(...(this.getClasses()))
    // Add any other Tailwind CSS classes you want to apply
  }
}
