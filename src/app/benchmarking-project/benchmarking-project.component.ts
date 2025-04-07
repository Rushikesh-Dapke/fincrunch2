import { Component } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-benchmarking-project',
  imports: [],
  templateUrl: './benchmarking-project.component.html',
  styleUrl: './benchmarking-project.component.scss'
})
export class BenchmarkingProjectComponent {
business_mail=environment.businessMail
}
