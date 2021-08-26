import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  constructor(private myService: MyServiceService) {
    this.projects = this.myService.projects;
    // console.log('projects');
  }

  projects;
  showAddProject = false

  addProject() {
    this.showAddProject = true
  }

}
