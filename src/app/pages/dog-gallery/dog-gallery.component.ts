import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // ✅ Importar FormsModule para usar [(ngModel)]
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'app-dog-gallery',
  templateUrl: './dog-gallery.component.html',
  styleUrls: ['./dog-gallery.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule] // ✅ Agregar FormsModule
})
export class DogGalleryComponent {
  dogImages: string[] = []; // ✅ Array para imágenes aleatorias o por raza
  dogBreeds: string[] = []; // ✅ Lista de razas
  selectedBreed: string = ''; // ✅ Variable para la raza seleccionada
  private dogService = inject(DogService);

  constructor() {
    this.getDogs(); // ✅ Cargar imágenes aleatorias al iniciar
    this.getBreeds(); // ✅ Cargar lista de razas al iniciar
  }

  // Cargar imágenes aleatorias
  getDogs() {
    this.dogService.getRandomDogs(8).subscribe((data) => {
      this.dogImages = data.message;
    });
  }

  // Cargar lista de razas desde la API
  getBreeds() {
    this.dogService.getBreeds().subscribe((data) => {
      this.dogBreeds = Object.keys(data.message); // ✅ Obtener solo los nombres de las razas
    });
  }

  // Cargar imágenes por raza seleccionada
  getDogsByBreed() {
    if (this.selectedBreed) {
      this.dogService.getImagesByBreed(this.selectedBreed).subscribe((data) => {
        this.dogImages = data.message.slice(0, 8); // ✅ Mostrar solo 8 imágenes
      });
    }
  }
}
