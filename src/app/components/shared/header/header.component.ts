import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})

export class HeaderComponent {

    value = '';

    constructor(){
    }

    buscarRestaurant(value: string) {
      this.value = value;
      console.log(value);
    }
}
