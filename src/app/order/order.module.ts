import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { PassengersDetailsComponent } from './passengers-details/passengers-details.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OrderSummaryComponent,
    OrderDetailsComponent,
    PassengersDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OrderModule { }
