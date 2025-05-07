import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ParticipaComponent } from './pages/participa/participa.component';
import { GraciasComponent } from './pages/gracias/gracias.component';
import { LegalesComponent } from './pages/legales/legales.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'participa', component: ParticipaComponent },
  { path: 'gracias', component: GraciasComponent},
  { path: 'legales', component: LegalesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
