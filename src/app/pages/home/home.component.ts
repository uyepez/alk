import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../../shared/header/header.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';


import Swal from 'sweetalert2';
declare var window: any;

import { environment } from '../../../environments/environment';
import { LoginService } from '../../services/login.service';
import { RegistroService, registroUser } from '../../services/registro.service';
import { AvisoComponent } from '../../legales/aviso/aviso.component';
import { BasesComponent } from '../../legales/bases/bases.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule, ReactiveFormsModule, RouterModule, AvisoComponent, BasesComponent],
  templateUrl: './home.component.html',
  styles: ``
})



export class HomeComponent {

// steps
step1 = [
    {
      letter: 'A',
      color: 'blue',
      image: '/assets/img/registro-datos.png',
      text: 'Registra tus datos.'
    }
  ];

step2 = [
    {
      letter: 'B',
      color: 'purple',
      image: '/assets/img/mec-juega.png',
      text: 'Juega, encuentra todos los pares del memorama.'
    },
    {
      letter: 'C',
      color: 'light-blue',
      image: '/assets/img/mec-participa.png',
      text: 'Participa obten una bocina inteligente.'
    }
  ];

  // login
  loginForm: FormGroup;
  respuestaLogin: any;
  isSubmitLogin: Boolean = false;

  // registro
  registroForm: FormGroup;
  respuestaRegistro: any;
  isSubmitReg: Boolean = false;
  miUsuario: registroUser = <registroUser>{};

  // modal
  formModal: any;
  formError: any;
  estadosModal: any;
  errorText: string = '';

  // estados
  arrayEstados = [
    'Baja California', 'Campeche', 'Coahuila de Zaragoza', 'Colima',
    'Chihuahua', 'Durango', 'Guerrero', 'México', 'Nayarit',
    'Nuevo León', 'Quintana Roo', 'Sinaloa', 'Tamaulipas', 'Yucatán'
  ];

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private logServ: LoginService,
    private regServ: RegistroService
  ) {
    this.loginForm = this.formBuilder.group({
      emaillogin: ['', [
        Validators.required,
        Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')
      ]]
    });

    this.registroForm = this.formBuilder.group({
      nombreregistro: ['', [
        Validators.required, Validators.minLength(3), Validators.maxLength(100),
        Validators.pattern('[a-z A-Z ÁÉÍÓÚ áéíóúÑñ]*')
      ]],
      apellidoregistro: ['', [
        Validators.required, Validators.minLength(3), Validators.maxLength(100),
        Validators.pattern('[a-z A-Z ÁÉÍÓÚ áéíóúÑñ]*')
      ]],
      telefonoregistro: ['', [
        Validators.required, Validators.minLength(10), Validators.maxLength(10),
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
      ]],
      emailregistro: ['', [
        Validators.required,
        Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')
      ]],
      estadoregistro: ['', [
        Validators.required,
        Validators.pattern('[a-z A-Z ÁÉÍÓÚ áéíóú ]*')
      ]],
      terminos: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(document.getElementById('registro'));
    this.formError = new window.bootstrap.Modal(document.getElementById('errorModal'));
    this.estadosModal = new window.bootstrap.Modal(document.getElementById('EstadosModal'));

  }

  loginusr(): void {
this.formModal.show();
    this.isSubmitLogin = true;
    if (this.loginForm.valid) {
      Swal.fire({
        allowOutsideClick: false,
        title: 'Espere por favor...',
        icon: 'info',
        confirmButtonText: 'Aceptar'
      });
      Swal.showLoading();

      this.logServ.login(this.loginForm.value['emaillogin']).subscribe((resp: any) => {
        this.respuestaLogin = resp;
        Swal.close();
        if (this.respuestaLogin.success === '200') {
          localStorage.setItem(environment.tokenVar, this.respuestaLogin.token);
          this.formModal.show();
        } else {
          this.errorText = this.respuestaLogin.error_msg;
          this.formError.show();
        }
      });
    }
  }

  registrousr(): void {
    this.isSubmitReg = true;
    if (this.registroForm.valid) {
      Swal.fire({
        allowOutsideClick: false,
        title: 'Espere por favor...',
        icon: 'info',
        confirmButtonText: 'Aceptar'
      });
      Swal.showLoading();
      this.miUsuario = this.registroForm.value;

      this.regServ.registro(this.miUsuario).subscribe((resp: any) => {
        this.respuestaRegistro = resp;
        Swal.close();
        if (this.respuestaRegistro.success === '200') {
          localStorage.setItem(environment.tokenVar, this.respuestaRegistro.token);
          this.formModal.show();
        } else {
          this.errorText = this.respuestaRegistro.error_msg;
          this.formError.show();
        }
      });
    }
  }

  irParticipa(): void {
    this.formModal.hide();
    this.router.navigateByUrl('/participa');
  }

  validaEstado(): void {
    if (this.arrayEstados.includes(this.registroForm.value['estadoregistro'])) {
      this.estadosModal.show();
    }
  }


}
