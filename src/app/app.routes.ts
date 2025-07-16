import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { Main1Component } from './work/main1/main1.component';
import { Main2Component } from './projects/main2/main2.component';

export const routes: Routes = [
    //makes it so home is the first page loaded up
 
  { path: '', component: MainComponent },
  
  { path: 'Home', component: MainComponent },
  { path: 'Work', component: Main1Component },
  { path: 'Projects', component: Main2Component },
];