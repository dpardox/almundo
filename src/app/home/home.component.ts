import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../services/hotel/hotel.service';
import { HotelInterface } from '../../interfaces/hotel.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public hotels: HotelInterface[];

  constructor(private hotel: HotelService) {}

  ngOnInit() {
    this.hotel.get().subscribe((hotels) => {
      console.log(hotels.length);
      this.hotels = hotels;
    });

    this.hotel.list();
  }
}
