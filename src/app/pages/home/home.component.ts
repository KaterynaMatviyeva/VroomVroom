import { Component, OnInit } from '@angular/core';
import { Auto } from '../../iAuto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router) {}
  allCars: Auto[] = [];
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
        this.allCars = data;
        this.cars = data.slice(1, 5);
      })
      .catch((err) => {
        console.log('Errore nel serve', err);
      });
  }

  navigateTo(brand: string) {
    this.router.navigate(['auto'], { state: { carBrand: brand } });
  }
}
