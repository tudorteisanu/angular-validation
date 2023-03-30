import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from './form-input/form-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';
import { ClickOutsideModule } from '../directives';
import { FormSelectComponent } from './form-select/form-select.component';

@NgModule({
  declarations: [FormInputComponent, PaginationComponent, FormSelectComponent],
  imports: [CommonModule, ReactiveFormsModule, ClickOutsideModule],
  exports: [FormInputComponent, PaginationComponent, FormSelectComponent],
})
export class FormComponentsModule {}
