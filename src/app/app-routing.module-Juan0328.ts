import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // 🏡 Home
  { path: 'gallery', component: GalleryComponent }, // 🖼️ Galería
  { path: 'random', loadChildren: () => import('./pages/random/random.module').then(m => m.RandomModule) }, // 📸 Lazy Load de imágenes aleatorias
  { path: 'search', loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule) } // 🔎 Lazy Load de búsqueda
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
