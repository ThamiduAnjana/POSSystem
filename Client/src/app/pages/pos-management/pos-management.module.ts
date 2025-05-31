import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosManagementRoutingModule } from './pos-management-routing.module';
import { SimplePosComponent } from './simple-pos/simple-pos.component';
import { AdvancePosComponent } from './advance-pos/advance-pos.component';
import {NgSelectModule} from "@ng-select/ng-select";
import {NgbInputDatepicker} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {SliceTextPipe} from "../../shared/customPipes/SliceTextPipe";


@NgModule({
  declarations: [
    SimplePosComponent,
    AdvancePosComponent
  ],
    imports: [
        CommonModule,
        PosManagementRoutingModule,
        NgSelectModule,
        NgbInputDatepicker,
        FormsModule,
        SharedModule,
        SliceTextPipe
    ]
})
export class PosManagementModule { }
