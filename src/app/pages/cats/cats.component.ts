import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatService, Cat } from '../../services/cat.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cats',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent {
  cats: Cat[] = [];

  constructor(private catService: CatService) {
    this.fetchCats(); // Carga inicial de imágenes
  }

  fetchCats() {
    this.catService.getRandomCats().subscribe(data => {
      this.cats = [...this.cats, ...data]; // Agregar nuevas imágenes sin borrar las anteriores
    });
  }

  // ✅ Implementación correcta del botón "Cargar más"
  loadRandomCats() {
    this.fetchCats();
  }
}
