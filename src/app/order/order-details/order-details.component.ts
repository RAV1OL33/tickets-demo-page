import { Component, OnInit } from '@angular/core';
import langJSON from 'src/assets/lang.json'

import { map, Observable, startWith } from 'rxjs';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Airport, Country, Nationality, Order, Passenger, PassengerDocumentType } from 'src/app/mock.model';
import { MockService } from 'src/app/mock.service';
import moment from 'moment'
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})




export class OrderDetailsComponent implements OnInit {
  order = <Order>{}
  nationalities: Nationality[] = []
  passengers: Passenger[] = []
  pageDict = langJSON.ru
  maxBirthDate = new Date
  passengerDocumnttype = PassengerDocumentType
  isAirportToValid: boolean = true
  isAirportFromValid: boolean = true
  isDateToValid: boolean = true
  isDateFromValid: boolean = true


  passengerForm = this.fb.group(
    {
      passengersArray: this.fb.array([])
    }
  )



  get passengersFormArray() {
    return this.passengerForm.controls["passengersArray"] as FormArray
  }

  // get fName(){
  //   return this.
  // }


  constructor(
    private service: MockService,
    private fb: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.service.getNationalities().subscribe(data => {
      this.nationalities = data
    })
    this.addNewPassenger()
    this.addNewPassenger()
  }

  diffY(date: Date) {
    return moment().diff(moment(date), 'days') / 365 > 5
  }


  passportDateOfExpireValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = moment().diff(moment(control.value), 'days') < 0 && moment().diff(moment(control.value), 'days') > -180
      return forbidden ? { passportDateOfExpireInvalid: true } : null
    }
  }
  birthdateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = this.diffY(control.value)
      return !forbidden ? { birthdateInvalid: true } : null
    }
  }



  addNewPassenger() {
    const pForm = this.fb.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      sex: ['', Validators.required],
      passportNo: ['', Validators.required],
      nationalityId: ['', Validators.required],
      documentType: [2, Validators.required],
      passportDateOfExpire: ['', [Validators.required, this.passportDateOfExpireValidator()]],
      birthdate: [null, [Validators.required, this.birthdateValidator()]],
    })
    this.passengersFormArray.push(pForm)
    this.passengers.push(<Passenger>{ documentType: 2 })
  }

  setToAirport(airport: Airport) {
    this.order.airportTo = airport
    console.log(this.order)

  }
  setFromAirport(airport: Airport) {
    this.order.airportFrom = airport
    console.log(this.order)
  }
  setDepartureDate(date: Date) {
    this.order.departureDate = date
  }
  setArrivalDate(date: Date) {
    this.order.arrivalDate = date
  }
  submitOrder() {
    this.order.passengers = this.passengers
    console.log(this.order)
    const currentDay = moment()
    const time_Diff = currentDay.diff(moment(this.order.arrivalDate), 'days')
    console.log(time_Diff)
    this.isAirportFromValid = this.order.airportFrom != null
    this.isAirportToValid = this.order.airportTo != null
    this.isDateToValid = this.order.arrivalDate != null
    this.isDateFromValid = this.order.departureDate != null
    console.log(this.order.airportFrom == null)
    console.log(this.order.airportFrom != null)
    console.log(this.order.airportFrom)
    this.service.setOrderData(this.order)
  }
}
