// project-service.service.ts
import { Injectable } from '@angular/core';
import { Project } from '../interfaces/interface';

@Injectable({ providedIn: 'root' })
export class ProjectServiceService {
  private project: Project[] = [
    {
      title: 'Join',
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
      details: 'Klare Modulstruktur, aussagekräftige Benennungen und sorgfältige Dokumentation organisiert. So bleibt der Code übersichtlich und gut wartbar.',
      category: 'Firebase MVP',
      duration: '3 Wochen',
      budget: 'Internes Projekt',
      status: 'Abgeschlossen',
      client: 'Eigenes Projekt',
      teamsize: '2 Personen',

    },
    {
      title: 'Overtake',
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
      details: 'Fokus auf saubere Architektur mit Angular 19, RxJS und manuell gepflegtem SCSS. Ich vertiefe API-Integration, Firestore-Nutzung und responsives Design, um ein performantes Portfolio-Projekt umzusetzen.',
      category: 'Firebase MVP',
      duration: '6 Wochen',
      budget: 'Internes Projekt',
      status: 'Abgeschlossen',
      client: 'Eigenes Projekt',
      teamsize: 'Einzelprojekt',
    },
  ];
  getProjects() {
    return this.project;
  }

  getProjectById(id: string) {
    return this.project.find((p) => p.title === id);
  }
}
