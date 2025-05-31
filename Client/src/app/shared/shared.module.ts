import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagetitleComponent } from './pagetitle/pagetitle.component';
import { PosProductsViewComponent } from './components/pos-products-view/pos-products-view.component';
import { PosInvoicePaymentComponent } from './components/pos-invoice-payment/pos-invoice-payment.component';
import {NgSelectModule} from "@ng-select/ng-select";
import {NgbAccordion, NgbInputDatepicker, NgbPanel, NgbPanelContent, NgbPanelTitle} from "@ng-bootstrap/ng-bootstrap";
import { PosProductsUpdateComponent } from './components/pos-products-update/pos-products-update.component';
import { GridSettingsComponent } from './components/grid-settings/grid-settings.component';
import { CreateGridViewComponent } from './components/create-grid-view/create-grid-view.component';
import { CreateProductsComponent } from './components/create-products/create-products.component';

@NgModule({
  declarations: [

    PagetitleComponent,
     PosProductsViewComponent,
     PosInvoicePaymentComponent,
     PosProductsUpdateComponent,
     GridSettingsComponent,
     CreateGridViewComponent,
     CreateProductsComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    NgbInputDatepicker,
    NgbAccordion,
    NgbPanel,
    NgbPanelTitle,
    NgbPanelContent
  ],
    exports: [PagetitleComponent, PosProductsViewComponent, PosInvoicePaymentComponent, PosProductsUpdateComponent, GridSettingsComponent]
})
export class SharedModule { }
