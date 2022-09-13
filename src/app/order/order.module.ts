import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsComponent, PrevOrderDialog } from './order-details/order-details.component';
import { PassengersDetailsComponent } from './passengers-details/passengers-details.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { DestinationPickerComponent } from './destination-picker/destination-picker.component';



@NgModule({
  declarations: [
    PrevOrderDialog,
    OrderDetailsComponent,
    PassengersDetailsComponent,
    DestinationPickerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ]
})
export class OrderModule { }
