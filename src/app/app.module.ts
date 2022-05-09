import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { AsideBarComponent } from './elements/aside-bar/aside-bar.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { ForgetPasswordComponent } from './authentication/forget-password/forget-password.component';
import { ExpensesComponent } from './spending-management/expenses/expenses.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestTableComponent } from './tests/test-table/test-table.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { ExpenseComponent } from './spending-management/expense/expense.component';
import { SecondModalComponent } from './elements/second-modal/second-modal.component';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    AsideBarComponent,
    ResetPasswordComponent,
    ForgetPasswordComponent,
    ExpensesComponent,
    TestTableComponent,
    ExpenseComponent,
    SecondModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    Ng2OrderModule,
    ButtonModule,
    SplitButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
