import { Component } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-financial-modeling',
  imports: [],
  templateUrl: './financial-modeling.component.html',
  styleUrl: './financial-modeling.component.scss'
})
export class FinancialModelingComponent {
  business_mail=environment.businessMail
}
