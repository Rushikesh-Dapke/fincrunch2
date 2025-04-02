import { AfterViewInit, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-our-services',
  imports: [],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent  implements AfterViewInit {
  private route = inject(ActivatedRoute);

  ngAfterViewInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
