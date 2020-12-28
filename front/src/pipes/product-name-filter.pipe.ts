import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './../app/shared/Product';

@Pipe({
    name: 'productNameFilter'
})

// POSSIBILITE MAIS PAS UTILISE CAR ON VEUT EFFECTUER LE FILTRAGE AVEC RXJS
export class ProductNameFilterPipe implements PipeTransform {

    transform(products: Product[], name: string): Product[] {
        if (name === null || name.length === 0) {
            return products;
        }

        return products.filter(product => {
            return product.name.toLocaleLowerCase().includes(name.toLocaleLowerCase());
        });
    }
}
