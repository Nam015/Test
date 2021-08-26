import { RegistrationlayoutComponent } from './../layout/registrationlayout/registrationlayout.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [{
  path: '', component: RegistrationlayoutComponent,
  children: [
    { path: '', component: RegistrationComponent },
    { path: 'login', component: LoginComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
