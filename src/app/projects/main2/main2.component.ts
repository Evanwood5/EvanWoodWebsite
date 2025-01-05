import { Component } from '@angular/core';

import { Hero2Component } from '../hero2/hero2.component';
import { Body2Component } from '../body2/body2.component';
import { HeroComponent } from '../../components/hero/hero.component';


@Component({
  selector: 'app-main2',
  standalone: true,
  imports: [ Hero2Component , Body2Component ],
  templateUrl: './main2.component.html',
  styleUrl: './main2.component.css'
})
export class Main2Component {

}
