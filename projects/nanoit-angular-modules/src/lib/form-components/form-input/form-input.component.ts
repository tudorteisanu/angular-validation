import { Component, Input, Optional, Self } from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  ValidationErrors,
} from '@angular/forms';
import { ValidationMessagesService } from '@nanoit-angular-modules/services';

@Component({
  selector: 'FormInput',
  templateUrl: './form-input.component.html',
})
export class FormInputComponent implements ControlValueAccessor {
  @Input() icon: string | undefined = undefined;
  @Input() type: string = 'text';
  @Input() disabled: boolean = false;
  @Input() customMessages = {};
  @Input() placeholder = '';
  @Input() label = '';

  constructor(@Self() @Optional() public control: NgControl) {
    this.control.valueAccessor = this;
  }

  get areMessageShown(): boolean {
    return !!this.control?.touched || !!this.control?.dirty;
  }

  get errors(): ValidationErrors | null {
    return this.control.errors;
  }

  get errorMessage() {
    return new ValidationMessagesService(
      this.errors,
      this.customMessages
    ).getErrorMessages();
  }

  get inputPlaceholder(): string {
    return this.placeholder || this.label;
  }

  get isValid(): boolean | null {
    return !this.areMessageShown || this.control?.valid;
  }

  get inputClass(): string {
    if (this.isValid) {
      return 'ring-gray-300 placeholder:text-gray-400 focus:ring-gray-500 text-gray-900';
    }

    return 'ring-red-300 placeholder:text-red-300 focus:ring-red-500 text-red-900';
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange = (value: any) => {};

  onTouched = () => {};

  writeValue(value: any): void {
    this.onChange(value);
  }

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
