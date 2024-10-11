import { Component } from '@angular/core';
import { Auto } from '../../iAuto';

@Component({
  selector: 'app-auto2',
  templateUrl: './auto2.component.html',
  styleUrl: './auto2.component.scss',
})
export class Auto2Component {
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
        this.cars = data.filter((car: Auto) => car.brand === 'Ford');
      })
      .catch((err) => {
        console.log('errore nel server', err);
      });
  }
}
