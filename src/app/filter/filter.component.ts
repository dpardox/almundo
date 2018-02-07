import { Component, OnInit, Input } from '@angular/core';
import { HotelService } from '../../services/hotel/hotel.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() expand = false;
  @Input() desktop = false;
  public name = '';
  public stars: object;

  constructor(private hotel: HotelService) {}

  ngOnInit() {
    this.all();
  }

  public open() {
    this.expand = !this.expand;
  }

  public search() {
    this.hotel.search(this.name, this.stars);
    if (!this.desktop) {
      this.expand = false;
    }
  }

  public all() {
    this.stars = { 0: true, 1: false, 2: false, 3: false, 4: false, 5: false };
  }

  public custom() {
    this.stars[0] = false;
  }
}
