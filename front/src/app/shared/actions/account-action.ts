import { Account } from '../Account';

export class RegisterJWT {
    static readonly type = '[Account] Add JWT';
    constructor(public payload: string) {}
}

export class RegisterLogin {
    static readonly type = '[Account] Add Login';
    constructor(public payload: string) {}
}
