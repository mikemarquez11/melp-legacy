import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { AboutComponent } from './components/about/about.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantTableComponent } from './components/restaurant-table/restaurant-table.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: CarouselComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'restaurant/:id', component: RestaurantComponent },
  { path: 'table', component: RestaurantTableComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
