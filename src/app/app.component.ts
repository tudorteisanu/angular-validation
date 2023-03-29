import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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
  };

  control = new FormControl('', {
    validators: [Validators.required],
  });
}
