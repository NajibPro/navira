import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProcedureTypeComponent } from './procedure-type/procedure-type.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthrevGardService } from './services/authrev-gard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthGuardService]},
  { path: 'signup', component: SignupComponent, canActivate: [AuthGuardService]},
  { path: '', component: LandingComponent},
  { path: 'procedures', component: ProcedureTypeComponent, canActivate: [AuthrevGardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
