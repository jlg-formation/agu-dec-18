import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[nirValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NirValidatorDirective, multi: true }]
})
export class NirValidatorDirective implements Validator {

  secret = 'this is my secret';
  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } | null {
    console.log('control', control.value);
    // teste nir demarre par 1 ou 2.
    if (!/^[12]/.test(control.value)) {
      return { badgender: 'le numero de secu ne commence pas par 1 ou 2' };
    }
    if (!/^[12]\d{2}/.test(control.value)) {
      return { badyear: 'le numero de secu doit avoir une annee de naissance' };
    }
    return null;
  }

}
