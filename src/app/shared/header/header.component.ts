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
  //nuevo alk
  menuItems =[
    {name: 'Promociones', color: 'green', route:'/promociones'},
    {name: 'Participa', color: 'purple', route:'/participa'},
    {name: 'Premios', color: 'purple', route:'/premios'},
    {name: 'Ganadores', color: 'purple', route:'/ganadores'},
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
