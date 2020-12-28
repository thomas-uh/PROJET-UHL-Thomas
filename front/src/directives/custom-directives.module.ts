import { ValidationErrorDirective } from './showValidationError.directive';
import { NgModule } from '@angular/core';
import { FieldMatchDirective } from './field-match.directive';

@NgModule({
    declarations: [
        FieldMatchDirective,
        ValidationErrorDirective
    ],
    exports: [
        FieldMatchDirective,
        ValidationErrorDirective
    ]
})
export class CustomDirectives {
}
