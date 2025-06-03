import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [],
  templateUrl: './juego.component.html',
  styleUrls:['./juego.component.css']

})
export class JuegoComponent {


   constructor() {

  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.loadGame();
  }

  loadGame() {
    const existing = document.querySelector('script[src*="rompecabezas2025.js"]');
    if (existing) {
      existing.remove(); // elimina el script anterior si ya estaba cargado
    }

    const script = document.createElement('script');
    script.src = 'assets/html5gamememoria/memoriaAlka.js?cachebust=233017298';
    script.async = false;
    script.defer = true;
    document.body.appendChild(script);
  }

}
