
import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
    selector: '[appFieldMatch]',
    providers: [{provide: NG_VALIDATORS, useExisting: FieldMatchDirective, multi: true}]
})

export class FieldMatchDirective implements Validator, OnChanges {

    @Input('appFieldMatch') valueToMatch: string;
    @Input() field: AbstractControl;

    private el: ElementRef;
    private renderer: Renderer2;

    constructor(el: ElementRef, renderer: Renderer2) {
        this.el = el;
        this.renderer = renderer;
    }
    validate(control: AbstractControl): { [key: string]: boolean } | null {
        return this.valueToMatch === control.value ? null : { fieldnotmatching: true };
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.field.updateValueAndValidity();
    }
}