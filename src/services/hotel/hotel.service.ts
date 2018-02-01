import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { HotelInterface } from '../../interfaces/hotel.interface';

@Injectable()
export class HotelService {
  private hotelsSubject = new Subject<HotelInterface[]>();
  public hotels: HotelInterface[];

  constructor(private http: HttpClient) {}

  public list() {
    this.http.get('assets/data/data.json').subscribe((response: HotelInterface[]) => {
      this.hotels = response;
      this.push(response);
    });
  }

  public get(): Observable<HotelInterface[]> {
    return this.hotelsSubject.asObservable();
  }

  private push(hotels) {
    this.hotelsSubject.next(hotels);
  }

  public search(name: string) {
    const hotels = this.hotels.filter((hotel: HotelInterface) => hotel.name.toLowerCase().indexOf(name.toLowerCase()) > -1);
    this.push(hotels);
  }
}
