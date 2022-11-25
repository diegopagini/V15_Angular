import { Route } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';

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
