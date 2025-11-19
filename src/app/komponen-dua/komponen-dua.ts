import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-komponen-dua',
  imports: [FormsModule],
  templateUrl: './komponen-dua.html',
  styleUrl: './komponen-dua.scss',
})
export class KomponenDua {
  firstname: string = '';
  lastname: string = '';

  get fullName(): string {
    return `${this.firstname} ${this.lastname}`;
  }

}
