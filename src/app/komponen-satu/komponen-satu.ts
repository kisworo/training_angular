import { Component } from '@angular/core';

@Component({
  selector: 'app-komponen-satu',
  imports: [],
  templateUrl: './komponen-satu.html',
  styleUrl: './komponen-satu.scss',
})
export class KomponenSatu {
  counter: number = 0;

  incrementCounter() {
    this.counter++;
  }

  decrementCounter() {
    this.counter--;
  }

}
