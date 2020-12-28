import { Product } from '../Product';

export class AddProductToCart {
    static readonly type = '[Product Cart] Add';
    constructor(public payload: Product) {}
}

export class RemoveOneUnit {
    static readonly type = '[Product Cart] RemoveOne';
    constructor(public payload: Product) {}
}

export class RemoveFromCart {
    static readonly type = '[Product Cart] Remove';
    constructor(public payload: Product) {}
}

export class ClearCart {
    static readonly type = '[Product Cart] Clear';
    constructor() {}
}
