import { RegisterLogin, RegisterJWT } from './../actions/account-action';
import { AccountStateModel } from './account-state-model';
import { Action, Selector, State, StateContext } from '@ngxs/store';

@State<AccountStateModel>({
    name: 'account',
    defaults: {
        jwtToken: '',
        login: '',
    }
})
export class AccountState {
    @Selector()
    static getJWTToken(state: AccountStateModel): string {
        return state.jwtToken;
    }

    @Selector()
    static getLogin(state: AccountStateModel): string {
        return state.login;
    }

    @Action(RegisterJWT)
    addJWT(
        { patchState }: StateContext<AccountStateModel>,
        { payload }: RegisterJWT
    ): void {
        patchState({
            jwtToken: payload
        });
    }

    @Action(RegisterLogin)
    addAccount(
        { patchState }: StateContext<AccountStateModel>,
        { payload }: RegisterLogin
    ): void {
        patchState({
            login: payload
        });
    }
}
