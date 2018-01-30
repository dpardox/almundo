import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HotelService {
  constructor(private http: HttpClient) {}

  public list(): Observable<any> {
    return this.http.get('assets/data/data.json');
  }
}
