import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { Project, Service } from '../../shared/interfaces/interface';
import { ProjectServiceService } from '../../shared/services/project-service.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-service-fullcard',
  imports: [RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './service-fullcard.component.html',
  styleUrl: './service-fullcard.component.scss',
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
export class ServiceFullcardComponent implements OnInit {
  service?: Service;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectServiceService,
    private location: Location
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service = this.projectService.getServiceById(id);
    }
  }

    goBack() {
    this.location.back();  
  }
}
