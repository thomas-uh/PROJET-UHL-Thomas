export class ProductFilter {
    public nameFilter: string;
    public priceLEFilter: number;
    public priceGEFilter: number;

    constructor(nameFilter: string, priceLEFilter: number, priceGEFilter: number) {
        this.nameFilter = nameFilter;
        this.priceLEFilter = priceLEFilter;
        this.priceGEFilter = priceGEFilter;
    }
}
