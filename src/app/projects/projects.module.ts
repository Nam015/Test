import { ProjectsComponent } from './projects/projects.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMainRoutingModule } from './projects-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProjectComponent } from './add-project/add-project.component';


@NgModule({
  declarations: [
    AddProjectComponent,ProjectsComponent],
  imports: [
    CommonModule,
    AllMainRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[AddProjectComponent,ProjectsComponent]
})
export class ProjectsModule { }
