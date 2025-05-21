import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import Swal from 'sweetalert2';
import { ParticipaService, registroDiferencias } from '../../services/participa.service';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-participa',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
      image: '/assets/img/registro-datos.png'
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




  // Formulario
  registroForm: FormGroup;
  isSubmitReg: boolean = false;
  respuestaReg: any;
  misDif: registroDiferencias = <registroDiferencias>{};

  // Timer
  @ViewChild('basicTimer') basicTimer: any;

  constructor(
    private router: Router,
    private regPart: ParticipaService,
    public formBuilder: FormBuilder
  ) {
    this.registroForm = this.formBuilder.group({
      dif01: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100), Validators.pattern('[a-z A-Z0-9 ÁÉÍÓÚ áéíóúÑñ]*')]],
      dif02: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100), Validators.pattern('[a-z A-Z0-9 ÁÉÍÓÚ áéíóúÑñ]*')]],
      dif03: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100), Validators.pattern('[a-z A-Z0-9 ÁÉÍÓÚ áéíóúÑñ]*')]],
      dif04: ['dif04', [Validators.required, Validators.minLength(3), Validators.maxLength(100), Validators.pattern('[a-z A-Z0-9 ÁÉÍÓÚ áéíóúÑñ]*')]],
      dif05: ['dif05', [Validators.required, Validators.minLength(3), Validators.maxLength(100), Validators.pattern('[a-z A-Z0-9 ÁÉÍÓÚ áéíóúÑñ]*')]]
    });
  }

  ngOnInit(): void {}

  irGracias(): void {
    this.router.navigateByUrl('/gracias');
  }

  guardaPart(): void {
    this.isSubmitReg = true;

    if (this.registroForm.valid) {
      this.misDif = this.registroForm.value;

      Swal.fire({
        allowOutsideClick: false,
        title: 'Espere por favor...',
        icon: 'info',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#0d6efd'
      });
      Swal.showLoading();

      this.basicTimer.stop();

      const partial = `${this.basicTimer.hours.toString().padStart(2, '0')}:${this.basicTimer.minutes.toString().padStart(2, '0')}:${this.basicTimer.seconds.toString().padStart(2, '0')}`;
      this.misDif.time = partial;

      this.regPart.registroDiferencias(this.misDif).subscribe((resp: any) => {
        this.respuestaReg = resp;
        Swal.close();

        if (this.respuestaReg.success === '200') {
          Swal.fire({
            allowOutsideClick: false,
            title: 'Gracias',
            icon: 'success',
            text: `Diferencias registradas correctamente`,
            confirmButtonText: 'Aceptar',
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigateByUrl('/gracias');
            }
          });
        } else {
          Swal.fire({
            title: 'Error',
            icon: 'error',
            text: this.respuestaReg.error_msg,
            confirmButtonText: 'Aceptar',
          });
        }
      });
    }
  }

}
