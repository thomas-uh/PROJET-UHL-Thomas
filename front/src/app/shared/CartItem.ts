import { Product } from './Product';

export class CartItem extends Product {
    public quantity: number;

    constructor(name: string, description: string, price: number) {
        super(name, description, price);
        this.quantity = 0;
    }
}