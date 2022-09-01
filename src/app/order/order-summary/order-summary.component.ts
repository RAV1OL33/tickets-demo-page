import { Component, Input, OnInit } from '@angular/core';
import { Nationality, Order, Passenger } from 'src/app/mock.model';
import { MockService } from 'src/app/mock.service';
import langJSON from 'src/assets/lang.json'

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  order = <Order>{}
  nationalities: Nationality[] = []
  // passengers: Passenger[] = []
  passengers: any[] = [[]]

  maxBirthDate = new Date

  constructor(
    private service: MockService
  ) { }
  pageDict = langJSON.ru

  ngOnInit(): void {
    this.service.getNationalities().subscribe(data => {
      this.nationalities = data
    })
    this.service.getOrderData().subscribe(data => {
      this.order = data
    })
    console.log(this.order)
  }

}
