import { Component } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-bespoke-project',
  imports: [],
  templateUrl: './bespoke-project.component.html',
  styleUrl: './bespoke-project.component.scss'
})
export class BespokeProjectComponent {
business_mail=environment.businessMail
}
