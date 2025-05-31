import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { ExtrapagesRoutingModule } from './extrapages-routing.module';
import { Page404Component } from './page404/page404.component';

@NgModule({
    declarations: [
        Page404Component
    ],
    exports: [
        Page404Component
    ],
    imports: [
        CommonModule,
        ExtrapagesRoutingModule,
        NgbCarouselModule
    ]
})
export class ExtrapagesModule { }
