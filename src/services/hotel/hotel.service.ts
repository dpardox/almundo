import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HotelInterface } from '../../interfaces/hotel.interface';

@Injectable()
export class HotelService {
  private data: HotelInterface[];
  public hotels: HotelInterface[];

  constructor(private http: HttpClient) {}

  public list(): Observable<any> {
    return this.http.get('assets/data/data.json');
  }

  public search(name: string) {
    this.hotels = this.data.filter((hotel: HotelInterface) => hotel.name === name);
  }
}
