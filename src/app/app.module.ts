import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { CardComponent } from './card/card.component';

import { HotelService } from '../services/hotel/hotel.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FilterComponent, CardComponent, HomeComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule {}
