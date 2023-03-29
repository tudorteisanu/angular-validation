import {Component, Input} from '@angular/core';
import { FormControl, ValidationErrors} from "@angular/forms";
import {ValidationMessagesParser} from "../utils";

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent {
  @Input() control = new FormControl()
  @Input() customMessages = {};

  get errors(): ValidationErrors | null {
    return this.control.errors
  }


  get errorMessage() {
    return new ValidationMessagesParser(this.errors, this.customMessages)
      .getErrorMessages()
  }


}
