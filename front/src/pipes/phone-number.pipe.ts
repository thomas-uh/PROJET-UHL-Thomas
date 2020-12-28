import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'phonenumber'
})
export class PhoneNumberPipe implements PipeTransform {

    transform(phoneNumber: string): string {

        if (phoneNumber == null) {
            return null;
        }

        let phone: string = phoneNumber;
        if (phoneNumber.charAt(0) === '+') {
            phone = phone.substr(4, phone.length - 3);
        }

        phone = phone.replace(/\s/g, '');
        let formatedPhoneNumber: string;

        formatedPhoneNumber = '+33 '.concat(phone.charAt(0));

        for(let i: number = 1; i < phone.length; i += 2) {
            formatedPhoneNumber = formatedPhoneNumber.concat(' ').concat(phone.substr(i, 2));
        }

        return formatedPhoneNumber;
    }
}
