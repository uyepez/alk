import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gracias',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './gracias.component.html',
  styles: ``
})
export class GraciasComponent {

}
