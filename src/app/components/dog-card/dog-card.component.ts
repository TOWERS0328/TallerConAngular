import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dog-card',
  standalone: true,
  imports: [CommonModule], // 🔹 Importa CommonModule para usar *ngIf
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.css']
})
export class DogCardComponent {
  @Input() dogImage: string = '';
}
