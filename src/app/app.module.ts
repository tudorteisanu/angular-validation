import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormComponentsModule} from "@nanoit-angular-modules/form-components";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
