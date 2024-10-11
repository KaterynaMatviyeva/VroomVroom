import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Auto1Component } from './pages/auto1/auto1.component';
import { Auto2Component } from './pages/auto2/auto2.component';
import { Auto3Component } from './pages/auto3/auto3.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'auto1',
    component: Auto1Component,
  },
  {
    path: 'auto2',
    component: Auto2Component,
  },
  {
    path: 'auto3',
    component: Auto3Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
