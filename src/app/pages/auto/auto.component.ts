import { Component, OnInit } from '@angular/core';
import { Auto } from '../../iAuto';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrl: './auto.component.scss',
})
export class AutoComponent implements OnInit {
  cars: Auto[] = [];

  ngOnInit() {
    const state = history.state;
    if (state && state['carBrand']) {
      const brand = state['carBrand'];
      fetch('db.json')
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Errore nella fetch');
          }
        })
        .then((data) => {
          this.cars = data.filter((car: Auto) => car.brand === brand);
        })
        .catch((err) => {
          console.log('errore nel server', err);
        });
    }
  }
}
