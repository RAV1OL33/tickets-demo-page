import { Component, OnInit } from '@angular/core';
import langJSON from 'src/assets/lang.json'
import countriesJSON from 'src/assets/countries.json'
import allowedDirections from 'src/assets/allowedDirections.json'
import airportsJSON from 'src/assets/airports.json'
import citiesJSON from 'src/assets/cities.json'
import nationalities from 'src/assets/nationalities.json'
import { map, Observable, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Airport, Country, Nationality, Order, Passenger } from 'src/app/mock.model';
import { MockService } from 'src/app/mock.service';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  private order = <Order>{}

  pageDict = langJSON.ru
  maxBirthDate = new Date
  nationalities: Nationality[] = []
  passengers: Passenger[] = []
  constructor(
    private service: MockService
  ) {

  }

  ngOnInit(): void {
    this.service.getNationalities().subscribe(data => {
      this.nationalities = data
    })
    this.addNewPassenger()
    this.addNewPassenger()
  }
  addNewPassenger(){
    this.passengers.push(<Passenger>{})
  }

  setToAirport(airport: Airport){
    this.order.airportTo = airport
    console.log(this.order)

  }
  setFromAirport(airport: Airport){
    this.order.airportFrom = airport
    console.log(this.order)
  }
  setBirthDateDate(e: any){

  }
}
