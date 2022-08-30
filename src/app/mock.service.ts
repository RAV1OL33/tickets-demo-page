import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import {
  AllowedDirection,
  City,
  Country,
  Nationality,
  Order,
  Passenger,
  Airport,
} from './mock.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockService {
  private airportsUrl: string = '../assets/airports.json';
  private countriesUrl: string = '../assets/countries.json';
  private citiesUrl: string = '../assets/cities.json';
  private nationalitiesUrl: string = '../assets/nationalities.json';
  private allowedDirectionsUrl: string = '../assets/allowedDirections.json';
  private order = <Order>{}
  private order2: Airport[] = []
  private orderData = new BehaviorSubject(this.order)

  constructor(private readonly httpClient: HttpClient) { }




  public getAirports(): Observable<Airport[]> {
    return this.httpClient.get<Airport[]>(this.airportsUrl).pipe(delay(1000));
  }
  public getCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(this.countriesUrl).pipe(delay(500));
  }
  public getCities(): Observable<City[]> {
    return this.httpClient.get<City[]>(this.citiesUrl).pipe(delay(1500));
  }
  public getNationalities(): Observable<Nationality[]> {
    return this.httpClient
      .get<Nationality[]>(this.nationalitiesUrl)
      .pipe(delay(1900));
  }
  public getAllowedDirections(): Observable<AllowedDirection[]> {
    return this.httpClient
      .get<AllowedDirection[]>(this.allowedDirectionsUrl)
      .pipe(delay(300));
  }

  public setAirport(airportTo: Airport,airportFrom: Airport,) {
    this.order.airportTo = airportTo
    this.order.airportFrom = airportFrom
    this.setOrderData(this.order)
  }
  public setOrderData(newOrderData: Order) {
    this.orderData.next(newOrderData)

    this.orderData.subscribe(data => {
      console.log(data)
    })

    // console.log(this.orderData)
  }
}
