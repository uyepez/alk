import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { AvisoComponent } from '../../legales/aviso/aviso.component';
import { BasesComponent } from '../../legales/bases/bases.component';
import { TerminosComponent } from '../../legales/terminos/terminos.component';

@Component({
  selector: 'app-legales',
  standalone: true,
  imports: [HeaderComponent, AvisoComponent, BasesComponent, TerminosComponent ],
  templateUrl: './legales.component.html',
  styles: ``
})
export class LegalesComponent {

}
