import { Routes } from '@angular/router';
import { Home } from './features/pages/home/home';
import { Converter } from './features/pages/converter/converter';
import { About } from './features/pages/about/about';
import { NotFound } from './features/pages/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'converter',
    component: Converter,
  },
  {
    path: 'about',
    component: About,
  },

  { path: '**', component: NotFound },
];
