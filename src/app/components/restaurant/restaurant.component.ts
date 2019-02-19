import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { restaurantsService } from '../../services/restaurantes.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {

  restaurantsData: {};
  onerestaurant: {};

  constructor(private activatedRoute:ActivatedRoute, private _restaurantsService: restaurantsService) {
      this.activatedRoute.params.subscribe( params => {
        console.log( params['id'] );
        this._restaurantsService.getRestaurants().subscribe( data => {
        this.onerestaurant = data.find(res => res.id == params['id'] );;
        console.log(this.onerestaurant);
      });

      } );
   }

   ngOnInit() {
   }

}
