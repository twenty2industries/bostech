// project-service.service.ts
import { Injectable } from '@angular/core';
import { Project, Service } from '../interfaces/interface';

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

  services: Service[] = [
    {
      id: 'portfolio-pro',
      title: 'Portfolio Pro',
      price: 300,
      description: 'Modernes One-Page-Portfolio mit interaktiver Galerie und Kontaktintegration – perfekt für kreative Profils.',
      iconUrl: 'assets/img/sections/icons/portfolioDefault.png',
      category: 'Portfolio Website',
      duration: '7–9 Werktage',
      features: ['Responsive One-Page-Design', 'Projekt-Galerie', 'Kontaktformular mit Social Media Integration'],
      deliverables: ['One-Page Website', 'Projekt-Galerie', 'Kontaktimplementation'],
      processSteps: ['Design Consultation', 'Entwicklung', 'Content Integration', 'Launch'],
      target: 'Freelancer, Künstler, Designer, Fotografen',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
      supportInfo: 'Zwei Wochen Support'
    },
    {
      id: 'starter-website',
      title: 'Starter Website',
      price: 450,
      description: 'Drei individuell gestaltete Unterseiten inklusive eines interaktiven Moduls wie Kontaktformular oder Online-Terminbuchung.',
      iconUrl: 'assets/img/sections/icons/starterDefault.png',
      category: 'Webentwicklung',
      duration: '9–12 Werktage',
      features: ['Mobile-optimiertes Responsive Design', 'Umfassende SEO-Optimierung für bessere Sichtbarkeit', 'Sicheres Kontaktformular mit erweitertem Spam-Schutz'],
      deliverables: ['Drei vollständig entwickelte Webseiten', 'Ein ausgewähltes Funktionsmodul nach Wahl', 'Komplette Hosting- und Domain-Einrichtung'],
      processSteps: ['Detailliertes Beratungsgespräch zur Anforderungsanalyse', 'Maßgeschneidertes Designkonzept basierend auf Corporate Identity', 'Agile Entwicklungsphase mit regelmäßigen Feedback-Schleifen', 'Professioneller Launch mit Domain- und Hosting-Einrichtung'],
      target: 'Handwerksbetriebe, Friseursalons, Lokale Gastronomie und Einzelhändler',
      technologies: ['Modernes HTML5', 'CSS3 mit Flexbox/Grid', 'Vanilla JavaScript'],
      supportInfo: 'Zwei Wochen kostenloser technischer Support nach Launch'
    },
    {
      id: 'firebase-mvp',
      title: 'Firebase MVP',
      price: 750,
      description: 'Umfassendes Minimum Viable Product mit Authentifizierungssystem, Firestore-Datenbank und API-Integration – ideal für Startups zur Validierung ihrer Geschäftsidee.',
      iconUrl: 'assets/img/sections/icons/mvpDefault.png',
      category: 'MVP Entwicklung',
      duration: '18–21 Werktage',
      features: ['Vollständiges Login-/Registrierungssystem', 'Echtzeit-Datenbank mit Firestore', 'RESTful API-Integration'],
      deliverables: ['Funktionierendes MVP', 'Dokumentation', 'Deployment auf Firebase'],
      processSteps: ['Anforderungsanalyse und Planung', 'Systemarchitektur und Datenmodellierung', 'Entwicklung und Testing', 'Deployment und Einführung'],
      target: 'Startups, Tech-Projekte, Gründer mit klarer Produktvision',
      technologies: ['Angular', 'Firebase Auth', 'Cloud Firestore', 'Node.js'],
      supportInfo: 'Drei Wochen technischer Support inklusive'
    },

  ];


  getProjects() {
    return this.project;
  }

  getServices() {
    return this.services;
  }

  getProjectById(id: string) {
    return this.project.find((p) => p.title === id);
  }

  getServiceById(id: string) {
    return this.services.find((s) => s.id === id);
  }
}
