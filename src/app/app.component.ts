import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'webAlk';



    constructor (private router: Router){


    this.router.events.subscribe((event) => {

      if (event instanceof NavigationEnd) {

        gtag('config', 'G-VM6ZXRQNM7',
          {
            'page_path': event.urlAfterRedirects
          }

        );
      }

    });




  } //constructor
}
