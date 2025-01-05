import { Component } from '@angular/core';

import { Hero1Component } from '../hero1/hero1.component';
import { Body1Component } from '../body1/body1.component';
@Component({
  selector: 'app-main1',
  standalone: true,
  imports: [ Hero1Component,Body1Component ],
  templateUrl: './main1.component.html',
  styleUrl: './main1.component.css'
})
export class Main1Component {

}
