import { Component } from '@angular/core';
import { Auto } from '../../iAuto';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  cars: Auto[] = [];

  ngOnInit() {
    const state = history.state;
    if (state && state['carModel']) {
      const model = state['carModel'];
      fetch('db.json')
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Errore nella fetch');
          }
        })
        .then((data) => {
          this.cars = data.filter((car: Auto) => car.model === model);
        })
        .catch((err) => {
          console.log('errore nel server', err);
        });
    }
  }
}
