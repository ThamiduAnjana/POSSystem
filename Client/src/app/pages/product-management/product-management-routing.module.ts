import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListsComponent } from "./product-lists/product-lists.component";
import { UnitListsComponent } from "./unit-lists/unit-lists.component";
import { BrandListsComponent } from "./brand-lists/brand-lists.component";

const routes: Routes = [
  { path: 'list', component: ProductListsComponent },
  { path: 'units', component: UnitListsComponent },
  { path: 'brands', component: BrandListsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule { }
