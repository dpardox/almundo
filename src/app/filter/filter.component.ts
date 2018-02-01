import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../services/hotel/hotel.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public expand = false;
  public name = '';

  constructor(private hotel: HotelService) {}

  ngOnInit() {}

  public open() {
    this.expand = !this.expand;
  }

  public search() {
    console.log(this.name);
    this.hotel.search(this.name);
    this.expand = false;
  }
}
