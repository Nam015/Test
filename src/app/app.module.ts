import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationlayoutComponent } from './registrationlayout/registrationlayout.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrationlayoutComponent,
    MainlayoutComponent,
    LoginComponent,
    RegistrationComponent,
    LeftsidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
