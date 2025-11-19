import { Component } from '@angular/core';
import { Project } from '../../shared/interfaces/interface';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ProjectServiceService } from '../../shared/services/project-service.service';




@Component({
  selector: 'app-projects-section',
  imports: [RouterModule],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss',
})
export class ProjectsSectionComponent {
  //#region properties

  projectList: Project[] = [];

    constructor(private router: Router, private projectService: ProjectServiceService) {}

  ngOnInit() {
    this.projectList = this.projectService.getProjects();
  }
  //#endregion properties
}
