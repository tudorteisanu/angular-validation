import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormComponentsModule} from "@nanoit-angular-modules/form-components";
import {FormInputComponent} from './form-input/form-input.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FormInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormComponentsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
