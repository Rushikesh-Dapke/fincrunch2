import { Component } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-dedicated-analyst',
  imports: [],
  templateUrl: './dedicated-analyst.component.html',
  styleUrl: './dedicated-analyst.component.scss'
})
export class DedicatedAnalystComponent {
business_mail=environment.businessMail
}
