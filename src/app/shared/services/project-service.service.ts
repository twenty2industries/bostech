// project-service.service.ts
import { Injectable } from '@angular/core';
import { Project } from '../interfaces/interface';

@Injectable({ providedIn: 'root' })
export class ProjectServiceService {
  private project: Project[] = [
    {
      title: 'Join',
      duration: 'Drei Wochen',
      imageUrl: 'assets/img/sections/projects/Join.png',
      description:
        'Ein Kanban-Manager mit Dashboard, Task-Manager und Kontaktverwaltung.',
      techstack: [
        {
          icon: 'assets/img/sections/icons/angularDefault.png',
          name: 'Angular',
        },
        { icon: 'assets/img/sections/icons/apiDefault.png', name: 'restAPI' },
        {
          icon: 'assets/img/sections/icons/firebaseDefault.png',
          name: 'FireBase',
        },
      ],
      projectUrl: 'https://task-manager-bb.netlify.app/',
    },
    {
      title: 'Overtake',
      duration: 'Sieben Wochen',
      imageUrl: 'assets/img/sections/projects/Overtake.png',
      description:
        'Eine Angular-App zur Darstellung von Sessions und Live-Daten.',
      techstack: [
        {
          icon: 'assets/img/sections/icons/angularDefault.png',
          name: 'Angular',
        },
        { icon: 'assets/img/sections/icons/apiDefault.png', name: 'restAPI' },
        {
          icon: 'assets/img/sections/icons/firebaseDefault.png',
          name: 'FireBase',
        },
        {
          icon: 'assets/img/sections/icons/tailwindDefault.png',
          name: 'Tailwind',
        },
      ],
      projectUrl: 'https://overtakef1.netlify.app/',
    },
  ];
  getProjects() {
    return this.project;
  }

  getProjectById(id: string) {
    return this.project.find((p) => p.title === id);
  }
}
