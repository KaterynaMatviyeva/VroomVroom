import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './main-component/nav-bar/nav-bar.component';
import { LogoBarComponent } from './main-component/logo-bar/logo-bar.component';
import { SideBarComponent } from './main-component/side-bar/side-bar.component';
import { FooterComponent } from './main-component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AutoComponent } from './pages/auto/auto.component';
import { DetailComponent } from './pages/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LogoBarComponent,
    SideBarComponent,
    FooterComponent,
    HomeComponent,
    AutoComponent,
    DetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
