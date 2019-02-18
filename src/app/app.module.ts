import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { restaurantsService } from './services/restaurantes.service';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AboutComponent,
    RestaurantsComponent,
    CarouselComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, NgbModule, HttpClientModule, APP_ROUTING
  ],
  providers: [
    restaurantsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
