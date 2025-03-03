import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogCardComponent } from '../../components/dog-card/dog-card.component';
import { RouterModule } from '@angular/router';
import { DogService } from '../../services/dog.service'; // ✅ Importación corregida
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DogCardComponent, RouterModule, FormsModule],
  providers: [DogService], // ✅ Asegurar que el servicio está en providers
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dogImage: string = '';
  breed: string = ''; // Raza ingresada por el usuario
  dogImages: string[] = []; // Almacena las imágenes de la raza buscada

  private dogService = inject(DogService); // ✅ Inyección de servicio corregida

  constructor() {
    this.getDog();
  }

  getDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        console.log('Imagen recibida:', data.message);
        this.dogImage = data.message;
      })
      .catch(error => console.error('Error al obtener la imagen', error));
  }

  searchBreed() {
    if (this.breed.trim() !== '') {
      this.dogService.getImagesByBreed(this.breed.toLowerCase()).subscribe(
        (response: { message: string[]; status: string }) => { // ✅ Definir tipos correctamente
          console.log('Imágenes de la raza:', response.message);
          this.dogImages = response.message;
        },
        (error: any) => { // ✅ Evitar el error de tipo
          console.error('Error al obtener imágenes por raza', error);
        }
      );
    }
  }
}
