import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ValidationMessagesService, ValidationRules } from '@modules';
import { FormComponentsModule } from '@modules';

@Component({
  selector: 'app-roles-create',
  standalone: true,
  imports: [CommonModule, FormComponentsModule, ReactiveFormsModule],
  providers: [ValidationMessagesService],
  templateUrl: './roles-create.component.html',
})
export class RolesCreateComponent {
  customErrorMessages = {
    code: 'Invalid code format. (ex. 9-12)',
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
      code: new FormControl('', [Validators.required, ValidationRules.code]),
    });
  }

  submit(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    alert('Submitted');
  }
}
