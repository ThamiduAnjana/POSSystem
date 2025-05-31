import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListsComponent} from "./product-lists/product-lists.component";

const routes: Routes = [
  { path: 'list', component: ProductListsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule { }
