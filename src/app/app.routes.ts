import { provideRouter, Routes, withComponentInputBinding } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component:OurServicesComponent,data: { title: 'Services' }},
  {path:'contact',component:ContactComponent}


];
export const appRouter = provideRouter(routes);