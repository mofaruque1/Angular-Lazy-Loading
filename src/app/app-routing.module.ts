import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'customers',loadChildren:'./customers/customers.module#CustomersModule'},
  {path:'orders',loadChildren:'./orders/orders.module#OrdersModule'},
  {path:'orders/details',loadChildren:'./orders/orders.module#OrdersModule'},//this one loads OrdersModule with path details
  {path: '',redirectTo: 'customers',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
