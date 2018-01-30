import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public expand = false;

  constructor() {}

  ngOnInit() {}

  public open() {
    this.expand = !this.expand;
  }
}
