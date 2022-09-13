import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryComponent } from './summary.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { CountdownComponent } from './countdown/countdown.component';


@NgModule({
  declarations: [
    SummaryComponent,
    CountdownComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SummaryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ]
})
export class SummaryModule { }
