import { Routes } from '@angular/router';
import { Home } from '../app/components/pages/home/home';
import { Product } from '../app/components/pages/product/product';
import { AboutUs } from '../app/components/pages/about-us/about-us';
import { PageNoFound } from './components/pages/page-no-found/page-no-found';

export const routes: Routes = [
  {
    path: 'about-us',
    component: AboutUs,
    title: 'About Us | Fundamentos',
  },
  {
    path: 'home',
    component: Home,
    title: 'Home | Fundamentos',
  },
  {
    path: 'product',
    component: Product,
    title: 'Product | Fundamentos',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNoFound, 
    title: ' Error 404 | Página no encontrada',
  }
];
