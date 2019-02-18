import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})

export class CarouselComponent {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [ 1, 2, 3].map(() => `https://mikeatunix.neocities.org/melp/img/slider-${Math.floor(Math.random() * (3 - 1)) + 1}.jpg`);

  constructor(config: NgbCarouselConfig, private _http: HttpClient) {
    // customize default values of carousels used by this component tree
      config.showNavigationArrows = true;
      config.showNavigationIndicators = true;
  }
}
