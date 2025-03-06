import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private apiUrl = 'https://dog.ceo/api'; // ✅ Usar URL correcta (sin environment)

  constructor(private http: HttpClient) {}

  // Obtener imágenes aleatorias
  getRandomDogs(count: number = 8): Observable<{ message: string[]; status: string }> {
    return this.http.get<{ message: string[]; status: string }>(`${this.apiUrl}/breeds/image/random/${count}`);
  }

  // Obtener lista de razas
  getBreeds(): Observable<{ message: Record<string, any>; status: string }> {
    return this.http.get<{ message: Record<string, any>; status: string }>(`${this.apiUrl}/breeds/list/all`);
  }

  // Obtener imágenes por raza
  getImagesByBreed(breed: string): Observable<{ message: string[]; status: string }> {
    return this.http.get<{ message: string[]; status: string }>(`${this.apiUrl}/breed/${breed}/images/random/8`); // ✅ Corregida la URL
  }
}
