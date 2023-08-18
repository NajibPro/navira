import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProcedureTypeComponent } from './procedure-type/procedure-type.component';
import { ProgressComponent } from './progress/progress.component';
import { Procedure1Component } from './procedure1/procedure1.component';
import { authGuard } from './guards/auth.guard';
import { authrevGard } from './guards/authrev.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [authGuard]},
  { path: 'signup', component: SignupComponent, canActivate: [authGuard]},
  { path: '', component: LandingComponent, canActivate: [authGuard]},
  { path: 'procedures', component: ProcedureTypeComponent, canActivate: [authrevGard]},
  { path: 'progress', component: ProgressComponent, canActivate: [authrevGard]},
  { path: 'procedure1', component: Procedure1Component, canActivate: [authrevGard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
