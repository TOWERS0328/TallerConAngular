import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule], // ✅ Asegura que RouterModule está aquí
})
export class AppComponent {
  title = 'Galería de Perros'; // ✅ Agregado para que coincida con la prueba
}
