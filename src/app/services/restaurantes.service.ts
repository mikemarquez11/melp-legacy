import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { Restaurant } from '../models/restaurant.model';


@Injectable()
export class restaurantsService {

  private serviceUrl = 'https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json';

  constructor(private http: HttpClient) { }
        getRestaurants():Observable<any> {
          return this.http.get('https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json');
        }
        getRestaurant():Observable<Restaurant[]> {
          return this.http.get<Restaurant[]>(this.serviceUrl);
        }
}
