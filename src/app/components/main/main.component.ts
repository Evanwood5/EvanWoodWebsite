import { Component } from '@angular/core';

import { HeroComponent } from '../hero/hero.component';

import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeroComponent,BodyComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
