import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'password'
})
export class PasswordPipe implements PipeTransform {

    transform(password: string): string {
        let anonymousString: string = '';
        for(let i: number = 0; i < password.length; i++) {
            anonymousString = anonymousString.concat('*');
        }

        return anonymousString;
    }
}
