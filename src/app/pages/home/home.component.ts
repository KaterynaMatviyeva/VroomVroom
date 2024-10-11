import { Component, OnInit } from '@angular/core';
import { Auto } from '../../iAuto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  cars: Auto[] = [];

  ngOnInit(): void {
    fetch('db.json')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('errore nella get');
        }
      })
      .then((data) => {
        this.cars = data.slice(1, 5);
      })
      .catch((err) => {
        console.log('Errore nel serve', err);
      });
  }

  test(brand: string): string[] {
    if (brand === 'Fiat') {
      return ['auto1'];
    } else if (brand === 'Ford') {
      return ['auto2'];
    } else if (brand === 'Audi') {
      return ['auto3'];
    }
    return [];
  }
}
