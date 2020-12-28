import { Address } from './Address';

export class Account {
    public lastname: string;
    public firstname: string;
    public civility: string;
    public address: Address;
    public phone: string;
    public email: string;
    public login: string;
    public password: string;

    constructor(
        lastname: string,
        firstname: string,
        civility: string,
        address: Address,
        phone: string,
        email: string,
        login: string,
        password: string
    ) {
        this.lastname = lastname;
        this.firstname = firstname;
        this.civility = civility;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.login = login;
        this.password = password;
    }
}
