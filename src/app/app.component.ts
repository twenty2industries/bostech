import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HeroSectionComponent, ProjectsSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bostechhomepage';
}
