import { Component } from '@angular/core';
import { Auto } from '../../iAuto';

@Component({
  selector: 'app-logo-bar',
  templateUrl: './logo-bar.component.html',
  styleUrl: './logo-bar.component.scss',
})
export class LogoBarComponent {
  brandLogos: string[] = [];

  ngOnInit() {
    fetch('db.json')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('errore dalla get');
        }
      })
      .then((data) => {
        data.forEach((auto: Auto) => {
          const brandLogoIndex = this.brandLogos.indexOf(auto.brandLogo);
          if (brandLogoIndex < 0) {
            this.brandLogos.push(auto.brandLogo);
          }
        });
      })
      .catch((err) => {
        console.log('errore dal server', err);
      });
  }
}
