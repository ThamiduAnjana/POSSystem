import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SimplePosComponent} from "./simple-pos/simple-pos.component";
import {AdvancePosComponent} from "./advance-pos/advance-pos.component";

const routes: Routes = [
  { path: 'simple-pos', component: SimplePosComponent },
  { path: 'advance-pos', component: AdvancePosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosManagementRoutingModule { }
