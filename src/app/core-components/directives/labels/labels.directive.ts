import { Directive, ElementRef } from '@angular/core';
import { inputLabel } from './labels.classes';

@Directive({
    selector: '[appInputLabel]'
})
export class InputLabelDirective {
    constructor(private elementRef: ElementRef) {
        // Apply Tailwind CSS classes to the component element
        this.applyClasses();
    }

    private applyClasses(): void {
        const element = this.elementRef.nativeElement;
        // Apply Tailwind CSS classes to the element using the renderer
        element.classList.add(...inputLabel)
        // Add any other Tailwind CSS classes you want to apply
    }
}
