import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AboutAppComponent } from './components/about-app/about-app.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PatientLoginSuccessComponent } from './components/patient-login-success/patient-login-success.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorSignupComponent } from './components/doctor-signup/doctor-signup.component';
import { DoctorDashboardComponent } from './components/doctor-dashboard/doctor-dashboard.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { PatientHistoryComponent } from './components/patient-history/patient-history.component';
import { ViewAppointmentsComponent } from './components/view-appointments/view-appointments.component';
import { OrderMedicinesComponent } from './components/order-medicines/order-medicines.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PNavbarComponent } from './components/p-navbar/p-navbar.component';
import { DNavbarComponent } from './components/d-navbar/d-navbar.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PatientLoginComponent,
    DoctorLoginComponent,
    SignupComponent,
    AboutUsComponent,
    AboutAppComponent,
    ContactUsComponent,
    PatientLoginSuccessComponent,
    DoctorSignupComponent,
    DoctorDashboardComponent,
    BookAppointmentComponent,
    PatientHistoryComponent,
    ViewAppointmentsComponent,
    OrderMedicinesComponent,
    NavbarComponent,
    FooterComponent,
    PNavbarComponent,
    DNavbarComponent,
    ComingSoonComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
