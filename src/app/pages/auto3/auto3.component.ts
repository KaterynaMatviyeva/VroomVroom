import { Component } from '@angular/core';
import { Auto } from '../../iAuto';

@Component({
  selector: 'app-auto3',
  templateUrl: './auto3.component.html',
  styleUrl: './auto3.component.scss',
})
export class Auto3Component {
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
        this.cars = data.filter((car: Auto) => car.brand === 'Audi');
      })
      .catch((err) => {
        console.log('errore nel server', err);
      });
  }
}
