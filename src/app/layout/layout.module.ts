import { RouterModule } from '@angular/router';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { RegistrationlayoutComponent } from './registrationlayout/registrationlayout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    RegistrationlayoutComponent,
    MainlayoutComponent,
    LeftsidebarComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
