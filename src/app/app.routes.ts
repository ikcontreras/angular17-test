import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { 
    path: '', 
    component: AppComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'main' },
      {
        path: 'main',
        loadComponent: () => import('./screens/main/main.component').then((m) => m.MainComponent),
      },
      { path: '**', redirectTo: 'main' },
    ]
  }
];
