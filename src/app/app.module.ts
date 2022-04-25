import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { AsideBarComponent } from './elements/aside-bar/aside-bar.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { ForgetPasswordComponent } from './authentication/forget-password/forget-password.component';
import { ExpensesComponent } from './spending-management/expenses/expenses.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    AsideBarComponent,
    ResetPasswordComponent,
    ForgetPasswordComponent,
    ExpensesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
