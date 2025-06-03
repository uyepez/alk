import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


import Swal from 'sweetalert2';

import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-participa',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent
  ],
  templateUrl: './participa.component.html',
  styles: ``
})
export class ParticipaComponent {
// steps
step1 = [
    {
      letter: '1',
      color: 'purple',
      text: 'Da clic en las cartas para busar los pares.',
      image: '/assets/img/game-cards1.png'
    }
  ];

step2 = [
    {
      letter: '2',
      color: 'blue',
      text: 'Cada par que encuentres permanecerá visible, los que sean pares se voltearán.'
    },
    {
      letter: '3',
      color: 'light-blue',
      text: 'Repite la acción hasta encontrar los 5 pares. '
    }
  ];



  constructor( private router: Router ) {

  }

  ngOnInit(): void {}


}
