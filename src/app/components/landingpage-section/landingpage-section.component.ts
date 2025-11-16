import { Component } from '@angular/core';
import { AboutSectionComponent } from '../about-section/about-section.component';
import { ContactSectionComponent } from '../contact-section/contact-section.component';
import { FaqSectionComponent } from '../faq-section/faq-section.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ServicesSectionComponent } from '../services-section/services-section.component';
import { ProjectsSectionComponent } from '../projects-section/projects-section.component';


@Component({
  selector: 'app-landingpage-section',
  imports: [AboutSectionComponent, ContactSectionComponent, FaqSectionComponent, HeroSectionComponent, HeaderComponent, FooterComponent, ServicesSectionComponent, ProjectsSectionComponent],
  templateUrl: './landingpage-section.component.html',
  styleUrl: './landingpage-section.component.scss'
})
export class LandingpageSectionComponent {

}
