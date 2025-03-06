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
  

    path: 'cats',
    loadComponent: () => import('./pages/cats/cats.component')
      .then(m => m.CatsComponent)
  }, // 🐱 Lazy Load de imágenes de gatos
  {
    path: 'cat-search',
    loadComponent: () => import('./pages/cat-search/cat-search.component')
      .then(m => m.CatSearchComponent)
  } // 🔎🐱 Lazy Load de búsqueda de gatos
];

export const routing = importProvidersFrom(RouterModule.forRoot(routes));
