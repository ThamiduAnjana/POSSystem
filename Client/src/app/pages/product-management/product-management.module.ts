import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManagementRoutingModule } from './product-management-routing.module';
import { ProductListsComponent } from './product-lists/product-lists.component';
import { FormsModule } from "@angular/forms";
import { NgbDropdown, NgbDropdownMenu, NgbDropdownToggle, NgbPagination, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { PaginationTextPipe } from "../../shared/customPipes/PaginationTextPipe";
import { SharedModule } from "../../shared/shared.module";
import { SliceTextPipe } from "../../shared/customPipes/SliceTextPipe";

@NgModule({
  declarations: [
    ProductListsComponent,
  ],
  imports: [
    CommonModule,
    ProductManagementRoutingModule,
    FormsModule,
    NgbPagination,
    NgbModule,
    PaginationTextPipe,
    SharedModule,
    SliceTextPipe,
    NgbDropdownMenu,
    NgbDropdown,
    NgbDropdownToggle
  ]
})
export class ProductManagementModule { }
