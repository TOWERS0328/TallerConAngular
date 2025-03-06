import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { DogService } from '../../services/dog.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // ✅ Importar HttpClientModule

@Component({
  selector: 'app-home',
  standalone: true,

  providers: [DogService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dogImage: string = '';
  breed: string = '';
  dogImages: string[] = [];
  isLoading: boolean = false; // ✅ Estado de carga

  private dogService = inject(DogService);

  constructor() {
    this.getDog();
  }

  async getDog() {
    this.isLoading = true;
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      this.dogImage = data.message;
    } catch (error) {
      console.error('Error al obtener la imagen', error);
    } finally {
      this.isLoading = false;
    }
  }

  searchBreed() {
    if (!this.breed.trim()) return;

    const breedMap: { [key: string]: string } = {
      "pastor aleman": "germanshepherd",
      "yorkshire": "yorkshireterrier",
      "bull terrier": "bullterrier",
      "gran danes": "greatdane",
      "san bernardo": "stbernard",
      "labrador": "labrador",
      "bulldog": "bulldog",
      "bulldog ingles": "bulldog/english",
      "bulldog frances": "bulldog/french"
    };

    const formattedBreed = this.breed.toLowerCase().replace(/\s+/g, '-');
    const apiBreed = breedMap[this.breed.toLowerCase()] || formattedBreed;

    this.isLoading = true;
    this.dogImages = [];

    this.dogService.getImagesByBreed(apiBreed).subscribe(
      (response: { message: string[]; status: string }) => {
        if (response.status === 'success' && response.message.length > 0) {
          this.dogImages = response.message;
        } else {
          console.warn('No se encontraron imágenes para esta raza.');
          this.dogImages = [];
        }
        this.isLoading = false;
      },
      (error: any) => {
        console.error('Error al obtener imágenes por raza', error);
        this.isLoading = false;
      }
    );
  }
}
