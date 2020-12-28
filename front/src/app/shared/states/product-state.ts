import { updateItem } from '@ngxs/store/operators';
import { CartItem } from './../CartItem';
import { ProductStateModel } from './product-state-model';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddProductToCart, ClearCart, RemoveFromCart, RemoveOneUnit } from './../actions/productCart-action';

@State<ProductStateModel>({
    name: 'productCart',
    defaults: {
        products: []
    }
})
export class ProductState {
    @Selector()
    static getNbOfProducts(state: ProductStateModel): number {
        let cartSize: number = 0;

        state.products.forEach((item) => {
            cartSize += item.quantity;
        });

        return cartSize;
    }

    @Selector()
    static getCartValue(state: ProductStateModel): number {
        let cartValue: number = 0;

        state.products.forEach((item) => {
            cartValue += (item.quantity * item.price)
        });

        return cartValue;
    }

    @Action(AddProductToCart)
    add(
        { getState, patchState }: StateContext<ProductStateModel>,
        { payload }: AddProductToCart
    ): void {
        const state = getState();
        const index = state.products.findIndex((element: CartItem) => element.name === payload.name);

        // Le produit n'est pas encore dans le panier
        if (index === -1) {
            const cartItem = new CartItem(payload.name, payload.description, payload.price);
            cartItem.quantity = 1;

            patchState({
                products: [...state.products, cartItem]
            });
        } else {
            const updatedCart = state.products;
            updatedCart[index].quantity++;

            patchState({
                products: updatedCart
            });
        }
    }

    @Action(RemoveOneUnit)
    removeOne(
        { getState, patchState }: StateContext<ProductStateModel>,
        { payload }: RemoveOneUnit
    ): void {
        const state = getState();
        const index = state.products.findIndex((element: CartItem) => element.name === payload.name);

        if (index !== -1) {
            const updatedCart = state.products;
            updatedCart[index].quantity--;

            if (updatedCart[index].quantity === 0) {
                updatedCart.splice(index, 1);
            }

            patchState({
                products: updatedCart
            });
        }
    }

    @Action(RemoveFromCart)
    remove(
        { getState, patchState }: StateContext<ProductStateModel>,
        { payload }: RemoveFromCart
    ): void {
        const state = getState();
        const index = state.products.findIndex((element: CartItem) => element.name === payload.name);

        if (index !== -1) {
            const updatedCart = state.products;
            updatedCart.splice(index, 1);

            patchState({
                products: updatedCart
            });
        }
    }

    @Action(ClearCart)
    clear(
        { getState, patchState }: StateContext<ProductStateModel>,
    ): void {
        const state = getState();

        patchState({
            products: []
        });
    }
}
