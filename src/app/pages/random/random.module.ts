import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // 👈 Agregar esto
import { RandomComponent } from './random.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule, // 👈 Importar el módulo de HTTP para que funcione DogService
    RouterModule.forChild([{ path: '', component: RandomComponent }])
  ]
})
export class RandomModule { }
