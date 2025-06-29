import { Component } from '@angular/core';

import { Hero2Component } from '../hero2/hero2.component';
import { Body2Component } from '../body2/body2.component';
import { BodywComponent } from '../bodyw/bodyw.component';
import { BodymComponent } from '../bodym/bodym.component';



@Component({
  selector: 'app-main2',
  standalone: true,
  imports: [ Hero2Component , Body2Component,BodywComponent, BodymComponent ],
  templateUrl: './main2.component.html',
  styleUrl: './main2.component.css'
})
export class Main2Component {

}
