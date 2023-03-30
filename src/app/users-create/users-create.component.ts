import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponentsModule } from '@modules';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  ValidationMessagesService,
  ValidationRules,
} from '@modules';

@Component({
  selector: 'app-users-create',
  standalone: true,
  imports: [CommonModule, FormComponentsModule, ReactiveFormsModule],
  providers: [ValidationMessagesService],
  templateUrl: './users-create.component.html',
})
export class UsersCreateComponent {
  customErrorMessages = {
    phone: 'Invalid phone number',
  };

  form!: FormGroup;
  errors: any = {};

  constructor(
    private fb: FormBuilder,
    private validationMessages: ValidationMessagesService
  ) {
    this.createForm();
    validationMessages.setCustomMessages(this.customErrorMessages);
  }

  createForm() {
    this.form = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(150),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, ValidationRules.phone]),
      address: new FormControl('', [
        Validators.minLength(2),
        Validators.maxLength(256),
      ]),
    });
  }

  submit(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }
    alert('submitted');
  }
}
