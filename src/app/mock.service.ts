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
  private citiesUrl: string = '../assets/cities.json';
  private airportsUrl: string = '../assets/airports.json';
  private countriesUrl: string = '../assets/countries.json';
  private nationalitiesUrl: string = '../assets/nationalities.json';
  private allowedDirectionsUrl: string = '../assets/allowedDirections.json';

  private orderData = new BehaviorSubject(<Order>{})

  private destinationTo = ' '
  private destinationFrom = ' '

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

  public setDepartureDate(date: Date) {
    const order = {...this.orderData.value}
    order.departureDate = date
    this.setOrderData(order)

  }
  public setArrivalDate(date: Date) {
    const order = {...this.orderData.value}
    order.arrivalDate = date
    this.setOrderData(order)

  }
  public getDepartureDate() {
    const order = {...this.orderData.value}
    return order.departureDate
  }
  public getArrivalDate() {
    const order = {...this.orderData.value}
    return order.arrivalDate
  }

  public setDestinationTo(destination: string) {
    this.destinationTo = destination
  }
  public setDestinationFrom(destination: string) {
    this.destinationFrom = destination
  }

  public getDestinationFrom() {
    return this.destinationFrom
  }
  public getDestinationTo() {
    return this.destinationTo
  }

  public setAirportFrom(airport: Airport) {
    const order = {...this.orderData.value}
    order.airportFrom = airport
    this.setOrderData(order)
  }
  public setAirportTo(airport: Airport) {
    const order = {...this.orderData.value}
    order.airportTo = airport
    this.setOrderData(order)
  }
  public getAirportFrom() {
    const order = {...this.orderData.value}
    return order.airportFrom
  }
  public getAirportTo() {
    const order = {...this.orderData.value}
    return order.airportTo
  }
  public setPassengers(passengers: Passenger[]){
    const order = {...this.orderData.value}
    order.passengers = passengers
    this.setOrderData(order)
  }

  public getOrderData(): Observable<Order> {
    return this.orderData
  }
  public setOrderData(newOrderData: Order) {
    // console.log(newOrderData)
    // console.log( this.getOrderData())
    this.orderData.next(newOrderData)
  
    localStorage.setItem('order', JSON.stringify(this.orderData.value))
  }
}
