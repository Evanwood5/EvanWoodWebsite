import { Component } from '@angular/core';

import { AwsComponent } from '../aws/aws.component';
import { AzureComponent} from '../azure/azure.component';
import { Header4Component } from '../header4/header4.component';

@Component({
  selector: 'app-main3',
  standalone: true,
  imports: [AwsComponent,AzureComponent,Header4Component ],
  templateUrl: './main3.component.html',
  styleUrl: './main3.component.css'
})
export class Main3Component {

}
