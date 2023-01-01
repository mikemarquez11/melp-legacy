import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { restaurantsService } from '../../services/restaurantes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurantsData: Object;

  constructor(private _restaurantsService: restaurantsService, private router:Router) {
  }

  ngOnInit() {
      this._restaurantsService.getRestaurants().subscribe( data => {
      this.restaurantsData = data;
      console.log(data);
    });
  }

  verRestaurant(idx: number){
      console.log(idx);
      this.router.navigate( ['/restaurant', idx]);
  }
}
