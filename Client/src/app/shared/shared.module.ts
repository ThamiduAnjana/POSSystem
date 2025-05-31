import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PagetitleComponent } from './pagetitle/pagetitle.component';
import { PosProductsViewComponent } from './components/pos-products-view/pos-products-view.component';
import { PosInvoicePaymentComponent } from './components/pos-invoice-payment/pos-invoice-payment.component';
import { NgSelectModule } from "@ng-select/ng-select";
import { NgbAccordion, NgbInputDatepicker, NgbPanel, NgbPanelContent, NgbPanelTitle } from "@ng-bootstrap/ng-bootstrap";
import { PosProductsUpdateComponent } from './components/pos-products-update/pos-products-update.component';
import { GridSettingsComponent } from './components/grid-settings/grid-settings.component';
import { CreateGridViewComponent } from './components/create-grid-view/create-grid-view.component';
import { CreateProductsComponent } from './components/create-products/create-products.component';

// Import DropzoneModule
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

// Define default dropzone config
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  url: 'https://httpbin.org/post', // Replace with your actual upload URL in production
  maxFilesize: 10, // MB
  acceptedFiles: 'image/*',
  addRemoveLinks: true,
  timeout: 180000,
  dictDefaultMessage: 'Drop image here or click to upload'
};

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
    ReactiveFormsModule,
    NgSelectModule,
    NgbInputDatepicker,
    NgbAccordion,
    NgbPanel,
    NgbPanelTitle,
    NgbPanelContent,
    DropzoneModule
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ],
  exports: [
    PagetitleComponent, 
    PosProductsViewComponent, 
    PosInvoicePaymentComponent, 
    PosProductsUpdateComponent, 
    GridSettingsComponent,
    CreateProductsComponent
  ]
})
export class SharedModule { }
