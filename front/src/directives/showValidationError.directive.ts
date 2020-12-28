import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Directive({
    selector: '[appShowValidationErrors]',
})

export class ValidationErrorDirective {

    @Input('appShowValidationErrors') control: AbstractControl;

    private el: ElementRef;
    private renderer: Renderer2;

    constructor(el: ElementRef, renderer: Renderer2) {
        this.el = el;
        this.renderer = renderer;
    }

    @HostListener('input') onInput() {
        if (this.control.invalid) {
            this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid red');
        } else {
            this.renderer.removeStyle(this.el.nativeElement, 'border');
        }
    }
}