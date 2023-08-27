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
import { SignupDpawComponent } from './signup-dpaw/signup-dpaw.component';
import { ProceduresDpawComponent } from './procedures-dpaw/procedures-dpaw.component';
import { authDPAWGuard } from './guards/authDPAW.guard';
import { DocumentComponent } from './document/document.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [authGuard]},
  { path: 'signup', component: SignupComponent, canActivate: [authGuard]},
  { path: '', component: LandingComponent, canActivate: [authGuard]},
  { path: 'procedures', component: ProcedureTypeComponent, canActivate: [authrevGard]},
  { path: 'progress', component: ProgressComponent, canActivate: [authrevGard]},
  { path: 'procedure1', component: Procedure1Component, canActivate: [authrevGard]},
  { path: 'signupDPAW', component: SignupDpawComponent, canActivate: [authGuard]},
  { path: 'proceduresDPAW', component: ProceduresDpawComponent, canActivate: [authDPAWGuard]},
  { path: 'document', component: DocumentComponent, canActivate: [authDPAWGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [authrevGard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
