import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private apiUrl = 'https://api.thecatapi.com/v1/';
  private apiKey = 'live_8GzlHiTR8TyAdFNh0LsVjoA4fnYJNYIvvPIRt2al0YJQV5AA6lw4Q1y1PejdF0jE';

  constructor(private http: HttpClient) {}

  // 🐾 Obtener razas de gatos
  getBreeds(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}breeds?api_key=${this.apiKey}`);
  }

  // 📸 Obtener gatos aleatorios
  getRandomCats(limit: number = 10): Observable<Cat[]> {
    return this.http.get<Cat[]>(`${this.apiUrl}images/search?limit=${limit}&api_key=${this.apiKey}`);
  }

  // 🔎 Obtener gatos por raza
  getCatsByBreed(breedId: string, limit: number = 10): Observable<Cat[]> {
    return this.http.get<Cat[]>(`${this.apiUrl}images/search?breed_ids=${breedId}&limit=${limit}&api_key=${this.apiKey}`);
  }
}

// ✅ Interfaz corregida
export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds?: { name: string }[]; // 🐱 Para obtener el nombre de la raza en la imagen
}
