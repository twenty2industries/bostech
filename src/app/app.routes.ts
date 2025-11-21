import { Routes } from '@angular/router';
import { FullCardComponent } from './shared/full-card/full-card.component';
import { LandingpageSectionComponent } from './components/landingpage-section/landingpage-section.component';
import { ServiceFullcardComponent } from './shared/service-fullcard/service-fullcard.component';


export const routes: Routes = [
  { path: '', component: LandingpageSectionComponent },
  { path: 'fullcard/:id', component: FullCardComponent },
  { path: 'services/:id', component: ServiceFullcardComponent }

];
