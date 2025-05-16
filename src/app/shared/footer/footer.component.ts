import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BasesComponent } from '../../legales/bases/bases.component';
import { AvisoComponent } from '../../legales/aviso/aviso.component';




@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [BasesComponent,AvisoComponent],
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent {

}
