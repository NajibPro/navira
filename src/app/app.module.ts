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
import { ProgressComponent } from './progress/progress.component';
import { Procedure1Component } from './procedure1/procedure1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupDpawComponent } from './signup-dpaw/signup-dpaw.component';
import { DpawNavComponent } from './dpaw-nav/dpaw-nav.component';
import { ProceduresDpawComponent } from './procedures-dpaw/procedures-dpaw.component';
import { DocumentComponent } from './document/document.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileSideBarComponent } from './profile-side-bar/profile-side-bar.component';
import { ProfileAccountComponent } from './profile-account/profile-account.component';
import { ProfileNotificationsComponent } from './profile-notifications/profile-notifications.component';
import { ProfileHelpComponent } from './profile-help/profile-help.component';
import { ProfileFilesComponent } from './profile-files/profile-files.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { ProfileDpawComponent } from './profile-dpaw/profile-dpaw.component';
import { ProfileDpawAccountComponent } from './profile-dpaw-account/profile-dpaw-account.component';

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
    ProgressComponent,
    Procedure1Component,
    SignupDpawComponent,
    DpawNavComponent,
    ProceduresDpawComponent,
    DocumentComponent,
    ProfileComponent,
    ProfileSideBarComponent,
    ProfileAccountComponent,
    ProfileNotificationsComponent,
    ProfileHelpComponent,
    ProfileFilesComponent,
    ImageViewerComponent,
    ProfileDpawComponent,
    ProfileDpawAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
