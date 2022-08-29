import { Component, OnInit } from '@angular/core';
import langJSON from 'src/assets/lang.json'
import countriesJSON from 'src/assets/countries.json'
import allowedDirections from 'src/assets/allowedDirections.json'
import airportsJSON from 'src/assets/airports.json'
import citiesJSON from 'src/assets/cities.json'
import nationalities from 'src/assets/nationalities.json'
import { map, Observable, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Country, Order, Passenger } from 'src/app/mock.model';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  pageDict = langJSON.ru
  value =''
  order: Order = {}
  // passengers: Passenger[] = []
  passengers: any[] = []
  constructor() { 

  }
  
  ngOnInit(): void {

  }




}
