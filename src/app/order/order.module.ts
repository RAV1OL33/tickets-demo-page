import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { PassengersDetailsComponent } from './passengers-details/passengers-details.component';



@NgModule({
  declarations: [
    OrderSummaryComponent,
    OrderDetailsComponent,
    PassengersDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrderModule { }
