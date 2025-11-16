import { Routes } from '@angular/router';
import { FullCardComponent } from './shared/full-card/full-card.component';
import { LandingpageSectionComponent } from './components/landingpage-section/landingpage-section.component';


export const routes: Routes = [
  { path: '', component: LandingpageSectionComponent },
  { path: 'fullcard', component: FullCardComponent }

];
