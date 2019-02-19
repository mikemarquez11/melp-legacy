import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSortModule, MatSortable, MatTableDataSource, MatSort } from '@angular/material';
import { restaurantsService } from '../../services/restaurantes.service';
import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { Restaurant } from '../../models/restaurant.model';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-restaurant-table',
  templateUrl: './restaurant-table.component.html',
  styleUrls: ['./restaurant-table.component.css']
})
export class RestaurantTableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  displayedColumns = ['id', 'rating', 'name', 'contact', 'address'];

  constructor(private _restaurantsService: restaurantsService) { }

  ngOnInit() {
    this._restaurantsService.getRestaurant().subscribe(results => {
      if(!results){
        return;
      }
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
    })
  }
}