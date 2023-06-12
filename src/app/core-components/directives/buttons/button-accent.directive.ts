import { Directive, ElementRef } from '@angular/core';
import { buttonAccent } from './button-tw';


@Directive({
    selector: '[appButtonAccent]'
})
export class ButtonAccentDirective {
    constructor(private elementRef: ElementRef) {
        // Apply Tailwind CSS classes to the component element
        this.applyClasses();
    }

    private applyClasses(): void {
        const element = this.elementRef.nativeElement;

        // Apply Tailwind CSS classes to the element using the renderer
        element.classList.add(...buttonAccent)
        // Add any other Tailwind CSS classes you want to apply
    }
}