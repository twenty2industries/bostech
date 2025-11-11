import { Component } from '@angular/core';
import { Project } from '../../shared/interfaces/interface';

@Component({
  selector: 'app-projects-section',
  imports: [],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss',
})
export class ProjectsSectionComponent {
  //#region properties
  project: Project[] = [
    {
      title: 'Join',
      duration: 'Drei Wochen',
      imageUrl: 'assets/images/projects/Join.png',
      description:
        'Ein Kanban-Manager mit Dashboard, Task-Manager und Kontaktverwaltung. Nutzer können Tasks mit Prioritäten erstellen, filtern und im Board verwalten. Das System bietet volle CRUD-Funktionen für Tasks und Kontakte.',
      techstack: [
        {
          icon: 'assets/img/sections/icons/angularDefault.png',
          name: 'Angular',
        },
        {
          icon: 'assets/img/sections/icons/apiDefault.png',
          name: 'restAPI',
        },
      ],
      projectUrl: '',
    },
    {
      title: 'Overtake',
      duration: 'Sieben Wochen',
      imageUrl: 'assets/images/projects/Overtake.png',
      description:
        'Eine Angular-App zur Darstellung von Fahrer- und Konstrukteurswertungen mit Fullcards für detaillierte Fahrerinfos. Geplant sind Features wie Rennkalender, Sessions und Live-Daten.',
      techstack: [
        {
          icon: 'assets/img/sections/icons/angularDefault.png',
          name: 'Angular',
        },
        {
          icon: 'assets/img/sections/icons/apiDefault.png',
          name: 'restAPI',
        },
      ],
      projectUrl: '',
    },
  ];
  //#endregion properties
}
