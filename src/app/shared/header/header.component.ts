import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  //Menu alk
  menuItems =[
    {name: 'Promociones', path:'/home', color: 'green', fragment:'hero'},
    {name: 'Participa', path: '/home', color: 'purple', fragment:'tres'},
    {name: 'Premios',  path: '/home', color: 'purple', fragment:'cuatro'},
    {name: 'Ganadores',  path: '/home', color: 'purple', fragment:'cinco'},
  ];
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  miToken: string =  "";


  constructor(private router: Router) {}

  ngOnInit(): void {
    this.miToken = localStorage.getItem(environment.tokenVar) as string;
    if (!this.miToken || this.miToken === 'undefined') {
      this.miToken = '';
    }
  }

  salir(): void {
    localStorage.setItem(environment.tokenVar, '');
    this.miToken = '';
    this.router.navigateByUrl('/home');
  }

}
