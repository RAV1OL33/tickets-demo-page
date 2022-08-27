import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrderModule } from './order/order.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material.module';


const routes: Routes = []

@NgModule({
  declarations: [AppComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule, OrderModule, AppRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
