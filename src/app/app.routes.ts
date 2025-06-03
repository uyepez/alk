import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ParticipaComponent } from './pages/participa/participa.component';
import { GraciasComponent } from './pages/gracias/gracias.component';
import { LegalesComponent } from './pages/legales/legales.component';
import { loginGuard } from './guards/login.guard';
import { JuegoComponent } from './pages/juego/juego.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'participa', component: ParticipaComponent, canActivate: [loginGuard]  },
  { path: 'gracias', component: GraciasComponent, canActivate: [loginGuard] },
  { path: 'juego', component: JuegoComponent, canActivate: [loginGuard] },
  { path: 'legales', component: LegalesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
