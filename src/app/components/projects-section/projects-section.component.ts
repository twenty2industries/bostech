import { Component } from '@angular/core';
import { Project } from '../../shared/interfaces/interface';

@Component({
  selector: 'app-projects-section',
  imports: [],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {

//#region properties
project: Project[] = [{
title: 'Join',
duration: 'Drei Wochen',
imageUrl: 'assets/images/projects/join.png',
description: 'Ein Kanban-Manager mit Dashboard, Task-Manager und Kontaktverwaltung. Nutzer können Tasks mit Prioritäten erstellen, filtern und im Board verwalten. Das System bietet volle CRUD-Funktionen für Tasks und Kontakte.',
techstack: ['Angular', 'Firebase'],
projectUrl: ''
}]
//#endregion properties
  
}
