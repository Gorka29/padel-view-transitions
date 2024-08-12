import { Routes } from '@angular/router';
import { PadelComponent } from './padel/padel.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/padel' },
  { path: 'padel', component: PadelComponent },
  {
    path: 'padel/:id',
    loadComponent: () => import('./padel-detail/padel-detail.component').then(m => m.PadelDetailComponent)
  }
];
