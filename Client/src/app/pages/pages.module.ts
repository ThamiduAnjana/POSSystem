import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';

import { SharedModule } from '../shared/shared.module';

import { PagesRoutingModule } from './pages-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import {ExtrapagesModule} from "../extrapages/extrapages.module";

@NgModule({
  declarations: [
    DashboardComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        PagesRoutingModule,
        SimplebarAngularModule,
        RouterModule,
        NgbDropdownModule,
        NgbNavModule,
        ExtrapagesModule
    ]
})
export class PagesModule { }
