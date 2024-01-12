import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: 'recovery/:recoveryid',
    component: RecoveryComponent,
    title: 'Reset Password'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard'
  },
  {
    path: 'account',
    component: AccountComponent,
    title: 'Account'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
