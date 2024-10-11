import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './main-component/nav-bar/nav-bar.component';
import { LogoBarComponent } from './main-component/logo-bar/logo-bar.component';
import { SideBarComponent } from './main-component/side-bar/side-bar.component';
import { FooterComponent } from './main-component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { Auto1Component } from './pages/auto1/auto1.component';
import { Auto2Component } from './pages/auto2/auto2.component';
import { Auto3Component } from './pages/auto3/auto3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LogoBarComponent,
    SideBarComponent,
    FooterComponent,
    HomeComponent,
    Auto1Component,
    Auto2Component,
    Auto3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
