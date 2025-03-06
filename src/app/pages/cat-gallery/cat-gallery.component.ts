import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CatService, Cat } from '../../services/cat.service';

@Component({
  selector: 'app-cat-gallery',
  standalone: true, // Indicar que es standalone
  imports: [CommonModule, FormsModule], // Importar módulos necesarios
  templateUrl: './cat-gallery.component.html',
  styleUrls: ['./cat-gallery.component.css']
})
export class CatGalleryComponent implements OnInit {
  catImages: Cat[] = [];
  catBreeds: any[] = [];
  selectedBreed: string = '';

  constructor(private catService: CatService) {}

  ngOnInit(): void {
    this.getBreeds();
    this.getRandomCats(); // Cargar imágenes aleatorias al inicio
  }

  getRandomCats(): void {
    this.catService.getRandomCats().subscribe((images: Cat[]) => {
      this.catImages = images;
    });
  }

  getBreeds(): void {
    this.catService.getBreeds().subscribe((breeds: any[]) => {
      this.catBreeds = breeds;
    });
  }

  getCatsByBreed(): void {
    if (!this.selectedBreed) return;
    this.catService.getCatsByBreed(this.selectedBreed).subscribe((images: Cat[]) => {
      this.catImages = images;
    });
  }
}
