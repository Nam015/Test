import { DashboardModule } from './dashboard/dashboard.module';
import { ProjectsModule } from './projects/projects.module';
import { RegisterModule } from './register/register.module';
import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'register', loadChildren: () => RegisterModule },
  { path: 'dashboard', loadChildren: () => DashboardModule },
  { path: 'projects', loadChildren: () => ProjectsModule },
  { path: '**', component: MainlayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
