import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './comp/navbar/navbar.component';
import { FormComponent } from './comp/form/form.component';
import { FormButtonComponent } from './comp/form-button/form-button.component';
import { ResultAreaComponent } from './comp/result-area/result-area.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    FormButtonComponent,
    ResultAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
