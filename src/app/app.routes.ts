import { Routes } from '@angular/router';
import { FullCardComponent } from './shared/full-card/full-card.component';

export const routes: Routes = [
  { path: 'fullcard', component: FullCardComponent },
  { path: '**', redirectTo: '' } // optionaler Fallback
];
