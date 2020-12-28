export class Address {
    public street: string;
    public zipCode: string;
    public city: string;
    public country: string;

    constructor(street: string, zipCode: string, city: string, country: string) {
        this.street = street;
        this.zipCode = zipCode;
        this.city = city;
        this.country = country;
    }

    public toString(): string {
        return `${this.street} ${this.zipCode} ${this.city}, ${this.country}`;
    };
}
