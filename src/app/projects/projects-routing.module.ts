import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainlayoutComponent } from '../layout/mainlayout/mainlayout.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [{
  path: '', component: MainlayoutComponent,
  children: [
    { path: '', component: ProjectsComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllMainRoutingModule { }
