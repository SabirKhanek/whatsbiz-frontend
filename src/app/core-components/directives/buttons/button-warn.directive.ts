import { Directive, ElementRef } from '@angular/core';
import { buttonWarn } from './button-tw';


@Directive({
    selector: '[appButtonWarn]'
})
export class ButtonWarnDirective {
    constructor(private elementRef: ElementRef) {
        // Apply Tailwind CSS classes to the component element
        this.applyClasses();
    }

    private applyClasses(): void {
        const element = this.elementRef.nativeElement;
        element.classList.add(...buttonWarn)
    }
}
