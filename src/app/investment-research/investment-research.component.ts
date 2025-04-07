import { Component } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-investment-research',
  imports: [],
  templateUrl: './investment-research.component.html',
  styleUrl: './investment-research.component.scss'
})
export class InvestmentResearchComponent {
business_mail=environment.businessMail
}
