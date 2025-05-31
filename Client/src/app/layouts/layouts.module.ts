import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';

import { VerticalComponent } from './vertical/vertical.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { HorizontaltopbarComponent } from './horizontaltopbar/horizontaltopbar.component';
import {TranslatePipe} from "@ngx-translate/core";

@NgModule({
  declarations: [
    VerticalComponent,
    TopbarComponent,
    LayoutComponent,
    SidebarComponent,
    FooterComponent,
    RightsidebarComponent,
    HorizontalComponent,
    HorizontaltopbarComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        FeatherModule.pick(allIcons),
        NgbDropdownModule,
        SimplebarAngularModule,
        TranslatePipe,
    ],
  exports: [VerticalComponent]
})
export class LayoutsModule { }
