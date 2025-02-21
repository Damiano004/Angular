import { CreaPostComponent } from './features/crea-post/crea-post.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: "full"
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
    path: 'modifica-post/:userID',
    component: CreaPostComponent
  }
];
