import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './../app/shared/Product';

@Pipe({
    name: 'productPriceFilter'
})

// POSSIBILITE MAIS PAS UTILISE CAR ON VEUT EFFECTUER LE FILTRAGE AVEC RXJS
export class ProductPriceFilterPipe implements PipeTransform {

    transform(products: Product[], priceLE: number, priceGE: number): Product[] {
        if ((priceLE === -1 || priceLE === null) && (priceGE === -1 || priceGE === null)) {
            return products;
        }

        if ((priceLE === -1 || priceLE === null)) {
            return products.filter(product => {
                return product.price >= priceGE;
            });
        }

        if ((priceGE === -1 || priceGE === null)) {
            return products.filter(product => {
                return product.price <= priceLE;
            });
        }

        return products.filter(product => {
            return product.price <= priceLE && product.price >= priceGE;
        });
    }
}
