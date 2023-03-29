import { Component } from '@angular/core';
import {AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

export function isInteger(): ValidatorFn {
  return ({value}:AbstractControl) : ValidationErrors | null => {
    if (!value) {
      return null;
    }

    const isInteger = Number.isInteger(value);
    return !isInteger ? {isInteger}: null;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-components';

  customErrorMessages = {
    maxlength: 'Mother fucker {requiredLength}',
    isInteger: 'Mother fucker, insert an integer',
  }

  control = new FormControl(
    '',
    [
      Validators.required,
      isInteger()
    ],
  );
}
