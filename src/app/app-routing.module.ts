import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { importProvidersFrom } from '@angular/core';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // 🏡 Home
  {
    path: 'dog-gallery',
    loadComponent: () => import('./pages/dog-gallery/dog-gallery.component')
      .then(m => m.DogGalleryComponent)
  }, // 🐶 Lazy Load de la Galería de Perros
  {
    path: 'cat-gallery',
    loadComponent: () => import('./pages/cat-gallery/cat-gallery.component')
      .then(m => m.CatGalleryComponent)
  } // 🐱 Nueva Galería Unificada de Gatos
];

export const routing = importProvidersFrom(RouterModule.forRoot(routes));
