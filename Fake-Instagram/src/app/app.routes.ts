import { CreaPostComponent } from './features/crea-post/crea-post.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: "full"
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'crea-post',
    component: CreaPostComponent
  },
  {
    path: 'modifica-post/:id/:userId/:titolo/:body',
    component: CreaPostComponent
  }
];
