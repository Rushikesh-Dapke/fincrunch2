import { Component } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
contact=environment.contactMail
business=environment.businessMail
career=environment.careerMail
address=environment.address
}
