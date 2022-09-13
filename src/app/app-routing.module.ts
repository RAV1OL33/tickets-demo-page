import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailsComponent } from './order/order-details/order-details.component';

const routes: Routes = [
  // {path: 'summary', component: OrderSummaryComponent},
  {path: '', component: OrderDetailsComponent},
  { path: 'summary', loadChildren: () => import('./summary/summary.module').then(m => m.SummaryModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

