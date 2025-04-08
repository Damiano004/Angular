import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'lista-pz',
    loadComponent: () => import('./Features/Lista-Pazienti/Lista-Pazienti.component').then(m => m.ListaPazientiComponent),
    pathMatch: 'full' //Il path deve coincidere con quello dato, da usare sempre
  },
  {
    path: 'accetta-pz',
    loadComponent: () => import('./Features/accetta-pz/accetta-pz.component').then(m => m.AccettaPzComponent),
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'lista-pz',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'lista-pz'
  }
];
