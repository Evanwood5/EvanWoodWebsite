import { Component } from '@angular/core';

@Component({
  selector: 'app-bodym',
  standalone: true,
  imports: [],
  templateUrl: './bodym.component.html',
  styleUrl: './bodym.component.css'
})
export class BodymComponent {

  isFlipped = false;

  flipCard = () => {
    const card = document.querySelector('.card');
    if (card) {
      card.classList.toggle('flipped');
      this.isFlipped = !this.isFlipped;
      console.log(`✅ flipCard() called, flipped = ${this.isFlipped}`);
    } else {
      console.warn('⚠️ No .card element found.');
    }
  };

}
