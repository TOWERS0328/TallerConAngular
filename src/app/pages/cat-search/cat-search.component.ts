import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CatService, Cat } from '../../services/cat.service';

@Component({
  selector: 'app-cat-search',
  templateUrl: './cat-search.component.html',
  styleUrls: ['./cat-search.component.css'],
  standalone: true,  // ✅ Componente standalone
  imports: [CommonModule, FormsModule, HttpClientModule] // ✅ Importa los módulos necesarios
})
export class CatSearchComponent implements OnInit {
  breeds: { id: string, name: string }[] = [];
  selectedBreed: string = '';
  cats: Cat[] = [];

  private catService = inject(CatService); // ✅ Sustituye el constructor por inject()

  ngOnInit(): void {
    this.loadBreeds();
  }

  loadBreeds(): void {
    this.catService.getBreeds().subscribe((data: any[]) => {
      this.breeds = data.map(breed => ({ id: breed.id, name: breed.name }));
    });
  }

  searchByBreed(): void {
    if (this.selectedBreed) {
      this.catService.getCatsByBreed(this.selectedBreed).subscribe((data: Cat[]) => {
        this.cats = data;
      });
    }
  }
}
