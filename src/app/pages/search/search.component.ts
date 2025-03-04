import { Component, inject } from '@angular/core';
import { DogService } from '../../services/dog.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule]
})
export class SearchComponent {
  breed: string = '';
  dogImages: string[] = [];
  private dogService = inject(DogService);

  searchBreed() {
    if (!this.breed.trim()) return;

    // Convertir a minúsculas y eliminar espacios
    const breedFormatted = this.breed.toLowerCase().replace(/\s+/g, '');

    this.dogService.getImagesByBreed(breedFormatted).subscribe({
      next: (data) => this.dogImages = data.message,
      error: (err) => console.error(`Error al obtener imágenes para la raza "${breedFormatted}":`, err)
    });
  }


}
