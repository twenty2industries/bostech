import { Component } from '@angular/core';
import { Service } from '../../shared/interfaces/interface';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-services-section',
  imports: [RouterLink],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent {

  services: Service[] = [
    {
      title: 'Starter Website',
      price: 450,
      description: '3 Seiten und 1 Modul, z. B. Kontaktformular oder Terminbuchung – ideal für lokale Betriebe.',
      target: 'Handwerker, Friseure, Lokale Unternehmen',
      duration: '9–12 Werktage',
      iconUrl: 'assets/img/sections/icons/starterDefault.png'
    },
    {
      title: 'Firebase MVP',
      price: 750,
      description: 'Login-System, Firestore CRUD und 1 API-Anbindung – perfekt für Startups mit klarer Produktidee.',
      target: 'Startups, Tech-Projekte, Gründer',
      duration: '18–21 Werktage',
      iconUrl: 'assets/img/sections/icons/mvpDefault.png'
    },
    {
      title: 'Portfolio Pro',
      price: 300,
      description: 'Moderner One-Pager mit Galerie und Kontaktformular – ideal für Freelancer und Kreative.',
      target: 'Freelancer, Künstler, Designer',
      duration: '7–9 Werktage',
      iconUrl: 'assets/img/sections/icons/portfolioDefault.png'
    }
  ];

}
