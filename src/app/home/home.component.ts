import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../services/hotel/hotel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private hotel: HotelService) {}

  ngOnInit() {
    this.hotel.list().subscribe(
      (data) => {
        console.log('Data', data);
      },
      (exception) => {
        console.error('Error', exception);
      }
    );
  }
}
