import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { HeroComponent } from './components/hero/hero.component';
import { MobileComponent } from "./components/mobile/mobile.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent, HeroComponent, HeaderComponent, MobileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Evan_Wood_Website';
}
