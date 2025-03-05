import { Component } from '@angular/core';
import { CamelCasePipe } from '../camel-case.pipe';

@Component({
  selector: 'app-home',
  imports: [CamelCasePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
