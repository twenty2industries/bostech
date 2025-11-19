import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../../shared/interfaces/interface';
import { ProjectServiceService } from '../../shared/services/project-service.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-full-card',
  imports: [RouterModule],
  templateUrl: './full-card.component.html',
  styleUrl: './full-card.component.scss',
  animations: [
trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1s ease-in', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate('1s ease-out', style({ opacity: 0 }))
  ])
])
]
})
export class FullCardComponent implements OnInit {
  project?: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectServiceService,
    private location: Location
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.project = this.projectService.getProjectById(id);
    }
  }

  goBack() {
    this.location.back();  
  }
}
