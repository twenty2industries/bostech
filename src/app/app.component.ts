import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FaqSectionComponent, FooterComponent, AboutSectionComponent, HeaderComponent, HeroSectionComponent, ProjectsSectionComponent, ServicesSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bostechhomepage';
}
