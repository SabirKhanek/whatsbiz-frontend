import { Directive, ElementRef } from '@angular/core';
import { buttonPrimary } from './button-tw';


@Directive({
  selector: '[appButtonPrimary]'
})
export class ButtonPrimaryDirective {
  constructor(private elementRef: ElementRef) {
    // Apply Tailwind CSS classes to the component element
    this.applyClasses();
  }

  private applyClasses(): void {
    const element = this.elementRef.nativeElement;

    // Apply Tailwind CSS classes to the element using the renderer
    element.classList.add(...buttonPrimary)
    // Add any other Tailwind CSS classes you want to apply
  }
}
