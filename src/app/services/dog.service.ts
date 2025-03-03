import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private apiUrl = environment.apiUrl;
  private images: string[] = []; // Array para almacenar las imágenes

  constructor(private http: HttpClient) {}

  getRandomDogs(count: number = 8): Observable<{ message: string[]; status: string }> {
    return this.http.get<{ message: string[]; status: string }>(`${this.apiUrl}/breeds/image/random/${count}`);
  }

  getImagesByBreed(breed: string): Observable<{ message: string[]; status: string }> { // ✅ Definir tipo de retorno
    return this.http.get<{ message: string[]; status: string }>(`${this.apiUrl}/breed/${breed}/images`);
  }

  addImage(image: string) {
    this.images.push(image); // Agrega la imagen al array
  }

  getImages(): string[] {
    return this.images; // Devuelve todas las imágenes almacenadas
  }
}
