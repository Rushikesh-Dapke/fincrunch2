import { provideRouter, Routes, withComponentInputBinding } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ContactComponent } from './contact/contact.component';
import { FinancialModelingComponent } from './financial-modeling/financial-modeling.component';
import { InvestmentResearchComponent } from './investment-research/investment-research.component';
import { DedicatedAnalystComponent } from './dedicated-analyst/dedicated-analyst.component';
import { BespokeProjectComponent } from './bespoke-project/bespoke-project.component';
import { BenchmarkingProjectComponent } from './benchmarking-project/benchmarking-project.component';

export const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  // {path:'services',component:OurServicesComponent,data: { title: 'Services' }},
  {path:'contact',component:ContactComponent},
  {path:'financial-modeling',component:FinancialModelingComponent},
  {path:'investment-research',component:InvestmentResearchComponent},
  {path:'dedicated-analyst',component:DedicatedAnalystComponent},
  {path:'bespoke-project',component:BespokeProjectComponent},
  {path:'benchmarking-project',component:BenchmarkingProjectComponent}
  


];
export const appRouter = provideRouter(routes);