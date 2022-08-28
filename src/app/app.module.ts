import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { OrderModule } from './order/order.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = []

@NgModule({
  declarations: [AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    RouterModule, OrderModule, AppRoutingModule, MaterialModule, ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
