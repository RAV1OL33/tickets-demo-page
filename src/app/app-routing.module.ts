import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailsComponent } from './order/order-details/order-details.component';
import { OrderSummaryComponent } from './order/order-summary/order-summary.component';

const routes: Routes = [
  {path: 'summary', component: OrderSummaryComponent},
  {path: '', component: OrderDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

