import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'mfev16',
    loadChildren: () =>
      import('mfev16/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'mfe',
    loadChildren: () => import('mfe/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
