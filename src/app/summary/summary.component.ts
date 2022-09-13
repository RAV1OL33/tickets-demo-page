import { Component, OnInit } from '@angular/core';
import { Nationality, Order, Passenger, PassengerDocumentType } from '../mock.model';
import { MockService } from '../mock.service';
import langJSON from 'src/assets/lang.json'
import { AbstractControl, FormArray, FormBuilder, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import moment from 'moment';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  pageDict = langJSON.ru
  order2: any = {
    airportFrom:
    {
      altitude: null,
      cityId: 1345,
      iata: "MSQ",
      icao: "UMMS",
      id: 484,
      isDeleted: false,
      isVirtual: false,
      latitude: 53.889725,
      longitude: 28.032442,
      name: "Minsk",
      parentId: 0,
      systemName: "Minsk",
      timezone: 2,
    },
    airportTo:
    {
      altitude: null,
      cityId: 1272,
      iata: "DXB",
      icao: "OMDB",
      id: 434,
      isDeleted: false,
      isVirtual: false,
      latitude: 25.248665,
      longitude: 55.352917,
      name: "Dubai International",
      parentId: 0,
      systemName: "Dubai International",
      timezone: 4,
    },
    departureDate: new Date,
    arrivalDate: new Date,
    passengers: [
      {
        birthdate: new Date,
        documentType: 2,
        fName: "Test",
        lName: "Test",
        nationalityId: 1,
        passportDateOfExpire: new Date,
        passportNo: "545454666333999",
        sex: "Male"
      },
      {
        birthdate: new Date,
        documentType: 2,
        fName: "Test",
        lName: "Test",
        nationalityId: 1,
        passportDateOfExpire: new Date,
        passportNo: "545454666333999",
        sex: "Male"
      },
    ]
  }

  order = <Order>{}
  nationalities: Nationality[] = []
  // passengers: Passenger[] = []
  passengers: any[] = []
  passengerDocumntType = PassengerDocumentType
  destinationTo = ''
  destinationFrom = ''

  passengerForm = this.fb.group({ passengersArray: this.fb.array([]) })
  dateFrom = new FormControl({ value: this.order.departureDate, disabled: true })
  dateTo = new FormControl(this.order.arrivalDate)
  get passengersFormArray() {
    return this.passengerForm.controls["passengersArray"] as FormArray
  }

  maxBirthDate = new Date

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

  constructor(
    private service: MockService,
    private fb: FormBuilder,
  ) { }
  addNewPassenger(passenger: Passenger) {
    const pForm = this.fb.group({
      fName: [passenger.fName, Validators.required],
      lName: [passenger.lName, Validators.required],
      sex: [passenger.sex, Validators.required],
      passportNo: [passenger.passportNo, Validators.required],
      nationalityId: [passenger.nationalityId, Validators.required],
      documentType: [passenger.documentType, Validators.required],
      passportDateOfExpire: [passenger.passportDateOfExpire, [Validators.required, this.passportDateOfExpireValidator()]],
      birthdate: [passenger.birthdate, [Validators.required, this.birthdateValidator()]],
    })
    this.passengersFormArray.push(pForm)
    this.passengers.push(<Passenger>{ documentType: 2 })
  }

  ngOnInit(): void {
    this.service.getNationalities().subscribe(data => {
      this.nationalities = data
    })
    this.service.getOrderData().subscribe(data => {
      this.order = data
    })
    console.log(this.order)
    for (let p of this.order.passengers) {
      this.addNewPassenger(p)
    }
    this.passengerForm.disable()
    this.destinationTo = this.service.getDestinationTo()
    this.destinationFrom = this.service.getDestinationFrom()
    this.dateFrom = new FormControl({ value: this.order.departureDate, disabled: true })
    this.dateTo = new FormControl({ value: this.order.arrivalDate, disabled: true })
  }
  editPassenger(passengerFormId: number) {
    this.passengersFormArray.controls[passengerFormId].enable()

  }
  applyChanges(passengerFormId: number) {
    console.log(this.passengersFormArray.controls[passengerFormId].value)
    if (this.passengersFormArray.controls[passengerFormId].valid) {
      this.order.passengers.splice(passengerFormId, 1, this.passengersFormArray.controls[passengerFormId].value)
      this.passengersFormArray.controls[passengerFormId].disable()
      this.service.setOrderData(this.order)
    }
    else return
  }
  reverseChanges(passengerFormId: number) {
    let passenger = this.order.passengers[passengerFormId]
    const pForm = this.fb.group({
      fName: [passenger.fName, Validators.required],
      lName: [passenger.lName, Validators.required],
      sex: [passenger.sex, Validators.required],
      passportNo: [passenger.passportNo, Validators.required],
      nationalityId: [passenger.nationalityId, Validators.required],
      documentType: [passenger.documentType, Validators.required],
      passportDateOfExpire: [passenger.passportDateOfExpire, [Validators.required, this.passportDateOfExpireValidator()]],
      birthdate: [passenger.birthdate, [Validators.required, this.birthdateValidator()]],
    })
    this.passengersFormArray.controls.splice(passengerFormId, 1, pForm)
    this.passengersFormArray.controls[passengerFormId].disable()

  }
}

