import { Component } from '@angular/core';
import { Service } from '../../shared/interfaces/interface';
import { Router, RouterLink } from '@angular/router';
import { ProjectServiceService } from '../../shared/services/project-service.service';


@Component({
  selector: 'app-services-section',
  imports: [RouterLink],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent {

  servicesList: Service[] = [];

  ngOnInit() {
    this.servicesList = this.projectService.getServices();
  }

    constructor(private router: Router, private projectService: ProjectServiceService) {}



}
