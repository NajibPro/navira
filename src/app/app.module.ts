import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LandingNavComponent } from './landing-nav/landing-nav.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProcedureTypeComponent } from './procedure-type/procedure-type.component';
import { FormsModule } from '@angular/forms';
import { ProceduresComponent } from './procedures/procedures.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeNavComponent } from './home-nav/home-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LandingNavComponent,
    SignupComponent,
    LoginComponent,
    ProcedureTypeComponent,
    ProceduresComponent,
    HomeNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
