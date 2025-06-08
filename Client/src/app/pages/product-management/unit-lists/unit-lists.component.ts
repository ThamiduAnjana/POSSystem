import { Component, OnInit, TemplateRef, ViewChild, OnDestroy } from '@angular/core';
import {
  NgbModal,
  NgbPaginationModule,
  NgbModalRef,
  NgbModalOptions,
  NgbDropdown,
  NgbDropdownMenu, NgbDropdownToggle
} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {RouterLink} from "@angular/router";
import {SliceTextPipe} from "../../../shared/customPipes/SliceTextPipe";
import {PaginationTextPipe} from "../../../shared/customPipes/PaginationTextPipe";
import {SharedModule} from "../../../shared/shared.module";

@Component({
  selector: 'app-unit-lists',
  templateUrl: './unit-lists.component.html',
  styleUrls: ['./unit-lists.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgbPaginationModule,
    RouterLink,
    NgbDropdown,
    NgbDropdownMenu,
    NgbDropdownToggle,
    SliceTextPipe,
    PaginationTextPipe,
    SharedModule
  ]
})
export class UnitListsComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  isLoading = true;
  page: number = 1;
  pageSize: number = 10;
  totalUnits: number = 0;
  gridFrom: any = {
    code: 'unit-lists',
    title: 'Unit Lists Grid Settings',
  };
  modalGridSettingsRef!: any;
  modalCreateUnitsRef!: any;

  gridData = {
    id: 1,
    name: 'Grid View 1',
    employee_id: 1,
    employee_name: 'Mr.John Doe',
    grid_header: [
      {
        id: 1,
        name: 'Unit Name',
        column: 'unit_name',
        class_list: 'text-start',
      },
      {
        id: 2,
        name: 'Short Name',
        column: 'short_name',
        class_list: 'text-start',
      },
      {
        id: 3,
        name: 'Base Unit',
        column: 'base_unit',
        class_list: 'text-start',
      },
      {
        id: 4,
        name: 'Operator',
        column: 'operator',
        class_list: 'text-center',
      },
      {
        id: 5,
        name: 'Operation Value',
        column: 'operation_value',
        class_list: 'text-end',
      },
      {
        id: 6,
        name: 'Status',
        column: 'is_active',
        class_list: 'text-center',
      }
    ],
    grid_data: [
      [
        {
          column: 'unit_name',
          column_type: 'text',
          color_code: '',
          class_list: '',
          is_link: true,
          ref: null,
          value: 'Piece',
        },
        {
          column: 'short_name',
          column_type: 'text',
          color_code: '',
          class_list: '',
          is_link: false,
          ref: null,
          value: 'PCS',
        },
        {
          column: 'base_unit',
          column_type: 'text',
          color_code: '',
          class_list: '',
          is_link: false,
          ref: null,
          value: 'Yes',
        },
        {
          column: 'operator',
          column_type: 'text',
          color_code: '',
          class_list: 'text-center',
          is_link: false,
          ref: null,
          value: 'N/A',
        },
        {
          column: 'operation_value',
          column_type: 'text',
          color_code: '',
          class_list: 'text-end',
          is_link: false,
          ref: null,
          value: '1.00',
        },
        {
          column: 'is_active',
          column_type: 'boolean',
          color_code: '',
          class_list: 'text-center',
          is_link: false,
          ref: null,
          value: 1,
          color: 'success'
        }
      ]
    ]
  };


  constructor(
    private modalService: NgbModal
  ) {
  }

  ngOnInit(): void {
    this.breadCrumbItems = [
      {label: 'Products'},
      {label: 'Unit Lists', active: true}
    ];
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  onPageChange(pageNumber: number) {
    this.page = pageNumber;
  }

  openGridSettingsModal(modal:any) {
    this.modalGridSettingsRef =  this.modalService.open(modal, {size: '2md', keyboard: false, backdrop: 'static'});
  }

  closeGridSettingsModal() {
    this.modalGridSettingsRef.close();
  }

  openCreateUnitsModal(modal: any) {
    this.modalCreateUnitsRef = this.modalService.open(modal, {
      size: 'xl',
      keyboard: false,
      backdrop: 'static',
      centered: true
    });

    // Handle modal result when closed
    this.modalCreateUnitsRef.result.then((result: any) => {
      if (result) {
        console.log('Units created:', result);
        // Here you would typically refresh the product list or add the new product to the list
      }
    }, (reason: any) => {
      console.log('Modal dismissed:', reason);
    });
  }

  closeCreateUnitsModal() {
    this.modalCreateUnitsRef.close();
  }

}
