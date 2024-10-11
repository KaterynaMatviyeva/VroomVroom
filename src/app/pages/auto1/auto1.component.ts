import { Component } from '@angular/core';
import { Auto } from '../../iAuto';

@Component({
  selector: 'app-auto1',
  templateUrl: './auto1.component.html',
  styleUrl: './auto1.component.scss',
})
export class Auto1Component {
  cars: Auto[] = [];

  ngOnInit() {
    fetch('db.json')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Errore nella fetch');
        }
      })
      .then((data) => {
        this.cars = data.filter((car: Auto) => car.brand === 'Fiat');
      })
      .catch((err) => {
        console.log('errore nel server', err);
      });
  }
}
