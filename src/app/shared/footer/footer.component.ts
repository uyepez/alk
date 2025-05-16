import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AvisoComponent } from '../../legales/aviso/aviso.component';
import { BasesComponent } from '../../legales/bases/bases.component';
import { TerminosComponent } from '../../legales/terminos/terminos.component';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, AvisoComponent,BasesComponent],
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent {

}
