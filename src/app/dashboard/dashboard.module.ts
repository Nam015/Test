import { AddProjectComponent } from './../projects/add-project/add-project.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsModule } from '../projects/projects.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ProjectsModule
  ],
  // entryComponents:[AddProjectComponent]
})
export class DashboardModule { }
