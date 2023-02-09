import { Route } from '@angular/router';

export const ADMIN_ROUTES: Route[] = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
  },
  {
    path: 'panel',
    loadComponent: () =>
      import('./components/panel/panel.component').then(
        (c) => c.PanelComponent
      ),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];
