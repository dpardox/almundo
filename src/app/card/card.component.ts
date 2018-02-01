import { Component, OnInit, Input } from '@angular/core';
import { HotelInterface } from '../../interfaces/hotel.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() hotel: HotelInterface;

  constructor() {}

  get stars() {
    return Array(this.hotel.stars).fill(null);
  }

  ngOnInit() {}
}
