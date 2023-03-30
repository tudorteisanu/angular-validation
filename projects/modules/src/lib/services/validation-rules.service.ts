import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export class ValidationRules extends Validators {
  static phone(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) {
      return null;
    }
    const regex = new RegExp('^[+]?[(]?[0][)]?[-s.]?[0-9]{3}[-s.]?[0-9]{5}$');
    const isValidNumber = regex.test(value);

    return !isValidNumber ? { phone: true } : null;
  }

  static code(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) {
      return null;
    }
    const regex = new RegExp('^[0-9]{1,2}[-s.]?[0-9]{2}$');
    const isValidNumber = regex.test(value);

    return !isValidNumber ? { code: true } : null;
  }
}
