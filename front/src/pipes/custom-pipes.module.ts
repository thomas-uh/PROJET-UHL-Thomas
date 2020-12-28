import { PasswordPipe } from './password.pipe';
import { NgModule } from '@angular/core';
import { PhoneNumberPipe } from './phone-number.pipe';
import { ProductNameFilterPipe } from './product-name-filter.pipe';
import { ProductPriceFilterPipe } from './product-price-filter.pipe';

@NgModule({
    declarations: [
        PhoneNumberPipe,
        PasswordPipe,
        ProductNameFilterPipe,
        ProductPriceFilterPipe
    ],
    exports: [
        PhoneNumberPipe,
        PasswordPipe,
        ProductNameFilterPipe,
        ProductPriceFilterPipe
    ]
})
export class CustomPipes {
}
