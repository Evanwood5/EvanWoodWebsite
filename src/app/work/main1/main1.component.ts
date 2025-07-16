import { Component } from '@angular/core';

import { Hero1Component } from '../hero1/hero1.component';
import { Body1Component } from '../body1/body1.component';
import { BodyeComponent } from '../bodye/bodye.component';
@Component({
  selector: 'app-main1',
  standalone: true,
  imports: [ Hero1Component,Body1Component,BodyeComponent ],
  templateUrl: './main1.component.html',
  styleUrl: './main1.component.css'
})
export class Main1Component {

}
