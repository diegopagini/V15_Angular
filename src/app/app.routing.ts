import { inject } from '@angular/core';
import { Route } from '@angular/router';

import { ADMIN_ROUTES } from './pages/admin-page/admin.routing';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AuthService } from './services/auth/auth.service';

export const routes: Route[] = [
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: 'data',
        loadComponent: () =>
          import('./pages/home-page/components/data/data.component').then(
            (c) => c.DataComponent
          ),
      },
      {
        path: 'info',
        loadComponent: () =>
          import('./pages/home-page/components/info/info.component').then(
            (c) => c.InfoComponent
          ),
      },
    ],
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
    path: 'admin',
    loadComponent: () =>
      import('./pages/admin-page/admin-page.component').then(
        (c) => c.AdminPageComponent
      ),
    children: [...ADMIN_ROUTES],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
