import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule]
})
export class RandomComponent {
  dogImages: string[] = []; // ✅ Array para almacenar múltiples imágenes
  private dogService = inject(DogService);

  constructor() {
    this.getDogs(); // ✅ Cargar imágenes al iniciar
  }

  getDogs() {
    this.dogService.getRandomDogs(8).subscribe((data) => {
      this.dogImages = data.message;
    });
  }

  }

