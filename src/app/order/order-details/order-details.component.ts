import { Component, Inject, OnInit } from '@angular/core';
import langJSON from 'src/assets/lang.json'

import { map, Observable, startWith } from 'rxjs';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Airport, AllowedDirection, City, Country, Nationality, Order, Passenger, PassengerDocumentType } from 'src/app/mock.model';
import { MockService } from 'src/app/mock.service';
import moment from 'moment'
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})




export class OrderDetailsComponent implements OnInit {

  order = <Order>{}
  passengers: Passenger[] = []
  nationalities: Nationality[] = []
  allowedDirections: AllowedDirection[] = []

  pageDict = langJSON.ru

  maxBirthDate = new Date
  passengerDocumntType = PassengerDocumentType

  isSubmit: boolean = false
  isLoadFrom: boolean = false

  passengerForm = this.fb.group(
    {
      passengersArray: this.fb.array([])
    }
  )



  get passengersFormArray() {
    return this.passengerForm.controls["passengersArray"] as FormArray
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private service: MockService,
  ) {

  }

  ngOnInit(): void {
    if (localStorage.getItem('order') != null) {
      this.openDialog()
    } else {
      this.addNewPassenger()
    }
    this.service.getNationalities().subscribe(data => {
      this.nationalities = data
    })
    this.service.getAllowedDirections().subscribe(data => {
      this.allowedDirections = data
    })

    this.passengerForm.valueChanges.subscribe(x => {
      this.savePassengers()
    })
  }

  diffY(date: Date) {
    return moment().diff(moment(date), 'days') / 365 > 20
  }

  passportDateOfExpireValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = moment().diff(moment(control.value), 'days') <= 0 && moment().diff(moment(control.value), 'days') > -180
      return forbidden ? { passportDateOfExpireInvalid: true } : null
    }
  }
  birthdateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = this.diffY(control.value)
      return !forbidden ? { birthdateInvalid: true } : null
    }
  }

  addNewPassenger(passenger: Passenger = <Passenger>{}) {
    const pForm = this.fb.group({
      sex: [passenger.sex, Validators.required],
      fName: [passenger.fName, Validators.required],
      lName: [passenger.lName, Validators.required],
      passportNo: [passenger.passportNo, Validators.required],
      documentType: [passenger.documentType, Validators.required],
      nationalityId: [passenger.nationalityId, Validators.required],
      birthdate: [passenger.birthdate, [Validators.required, this.birthdateValidator()]],
      passportDateOfExpire: [passenger.passportDateOfExpire, [Validators.required, this.passportDateOfExpireValidator()]],

    })
    this.passengersFormArray.push(pForm)
    this.passengers.push(<Passenger>{ documentType: 2 })
    this.savePassengers()
  }

  deletePassenger() {
    this.passengers.pop()
    this.passengersFormArray.removeAt(this.passengersFormArray.length - 1)
    this.savePassengers()
  }
  savePassengers() {
    this.order.passengers = this.passengersFormArray.value
    this.service.setPassengers(this.passengersFormArray.value)
  }

  isDirectionAllowed() {
    let destinationWithJump = <any>[]
    if (this.order.airportFrom && this.order.airportTo) {
      let destination = this.allowedDirections.filter(direction => direction.cityFromId == this.order.airportFrom.cityId && direction.cityToId == this.order.airportTo.cityId)
      if (destination.length == 0) {
        let allowedDestinationsFrom = this.allowedDirections.filter(direction => direction.cityFromId == this.order.airportFrom.cityId)
        let allowedDestinationsTo = this.allowedDirections.filter(direction => direction.cityToId == this.order.airportTo.cityId)
        for (let dest of allowedDestinationsFrom) {
          let destinations = this.allowedDirections.filter(direction => direction.cityFromId == dest.cityFromId)
          destinationWithJump = destinations.filter(d1 => allowedDestinationsTo.some(d2 => d1.cityToId == d2.cityFromId))
          if (destinationWithJump.length > 0) break
        }
        console.log(destinationWithJump)
        // let destinationWithJump = allowedDestinationsFrom.filter(d1 => allowedDestinationsTo.some(d2=> d1.))
      }
    }
  }

  setDepartureDate(date: Date) {
    this.order.departureDate = date
  }
  setArrivalDate(date: Date) {
    this.order.arrivalDate = date
  }
  submitOrder() {
    this.order.passengers = this.passengersFormArray.value
    this.order.airportTo = this.service.getAirportTo()
    this.order.airportFrom = this.service.getAirportFrom()
    this.order.arrivalDate = this.service.getArrivalDate()
    this.order.departureDate = this.service.getDepartureDate()
    console.log(this.order)
    this.isSubmit = true
    if (this.passengersFormArray.valid && this.order.airportFrom && this.order.airportTo && this.order.arrivalDate && this.order.departureDate) {
      console.log('Order valid')
      this.service.setOrderData(this.order)
      this.router.navigateByUrl('/summary')
    } else {
      this.passengersFormArray.markAllAsTouched()
      return
    }

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(PrevOrderDialog, {
      width: '250px',
      data: this.pageDict.order_summary,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (localStorage.getItem('order') != null) {
        const order = JSON.parse(localStorage.getItem('order') || '')
        this.isLoadFrom = true
        this.service.setOrderData(order)
        console.log(order)
        if (order.passengers.length > 0) {
          for (let p of order.passengers) {
            this.addNewPassenger(p)
          }
        } else {
          this.addNewPassenger()
        }
      } else
        this.addNewPassenger()

    });
  }
}
@Component({
  selector: 'dialog-localstorage',
  templateUrl: 'dialog-localstorage.html',
})
export class PrevOrderDialog {
  constructor(
    public dialogRef: MatDialogRef<PrevOrderDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  onNoClick(): void {
    localStorage.clear()
    this.dialogRef.close();
  }
}