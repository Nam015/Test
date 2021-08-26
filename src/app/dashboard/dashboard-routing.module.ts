import { MainlayoutComponent } from './../layout/mainlayout/mainlayout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [{
  path: '', component: MainlayoutComponent,
  children: [{ path: '', component: DashboardComponent }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
