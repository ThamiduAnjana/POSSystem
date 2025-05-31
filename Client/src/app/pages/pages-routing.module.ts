import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }, {
    path: 'product-management',
    loadChildren: () => import('./product-management/product-management.module').then(m => m.ProductManagementModule)
  },{
    path: 'pos-management',
    loadChildren: () => import('./pos-management/pos-management.module').then(m => m.PosManagementModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
