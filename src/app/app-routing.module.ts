import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './authentication/forget-password/forget-password.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { AsideBarComponent } from './elements/aside-bar/aside-bar.component';
import { SecondModalComponent } from './elements/second-modal/second-modal.component';
import { ListProjectsComponent } from './intervention/projects/list-projects/list-projects.component';
import { ProjectsComponent } from './intervention/projects/projects.component';
import { ExpenseComponent } from './spending-management/expense/expense.component';
import { ExpensesComponent } from './spending-management/expenses/expenses.component';
import { TestTableComponent } from './tests/test-table/test-table.component';
import { TimeSheetComponent } from './time-sheet/time-sheet.component';


const routes: Routes = [
  {path:'sign-up',component:SignUpComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'forget-pswd',component:ForgetPasswordComponent},
  {path:'reset-pswd',component:ResetPasswordComponent},
  {path:'aside',component:AsideBarComponent},
  {path:'',component:TestTableComponent},
  {path:'exp',component:ExpensesComponent},
  {path:'e',component:ExpenseComponent},
  {path:'ex',component:SecondModalComponent},
  {path:'time',component:TimeSheetComponent},
  {path:'Projects',component:ListProjectsComponent},
  {path:'Projects/:id',component: ProjectsComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }