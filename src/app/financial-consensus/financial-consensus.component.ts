import { Component } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-financial-consensus',
  imports: [],
  templateUrl: './financial-consensus.component.html',
  styleUrl: './financial-consensus.component.scss'
})
export class FinancialConsensusComponent {
business_mail=environment.businessMail
}
