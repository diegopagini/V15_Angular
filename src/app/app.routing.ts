import { inject } from '@angular/core';
import { Route } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AuthService } from './services/auth/auth.service';

export const routes: Route[] = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about-page/about-page.component').then(
        (c) => c.AboutPageComponent
      ),
    canActivate: [() => inject(AuthService).isAuth()],
  },
  {
    path: 'forms',
    loadComponent: () =>
      import('./pages/forms-page/forms-page.component').then(
        (c) => c.FormsPageComponent
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
