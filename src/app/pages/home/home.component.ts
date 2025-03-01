import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogCardComponent } from '../../components/dog-card/dog-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DogCardComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  dogImage: string = '';

  constructor() {
    this.getDog();
  }

  getDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        console.log('Imagen recibida:', data.message); // 🔍 Verifica en consola
        this.dogImage = data.message;
      })
      .catch(error => console.error('Error al obtener la imagen', error));
  }
}
