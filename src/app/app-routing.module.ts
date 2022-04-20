import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './authentication/forget-password/forget-password.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { AsideBarComponent } from './elements/aside-bar/aside-bar.component';
import { ExpensesComponent } from './spending-management/expenses/expenses.component';


const routes: Routes = [
  {path:'sign-up',component:SignUpComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'forget-pswd',component:ForgetPasswordComponent},
  {path:'reset-pswd',component:ResetPasswordComponent},
  {path:'aside',component:AsideBarComponent},
  {path:'',component:ExpensesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }