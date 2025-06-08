import { Component, OnInit, TemplateRef, ViewChild, OnDestroy } from '@angular/core';
import {
  NgbModal,
  NgbPaginationModule,
  NgbModalRef,
  NgbModalOptions,
  NgbDropdown,
  NgbDropdownMenu,
  NgbDropdownToggle
} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RouterLink } from "@angular/router";
import { SliceTextPipe } from "../../../shared/customPipes/SliceTextPipe";
import { PaginationTextPipe } from "../../../shared/customPipes/PaginationTextPipe";
import { SharedModule } from "../../../shared/shared.module";

@Component({
  selector: 'app-brand-lists',
  templateUrl: './brand-lists.component.html',
  styleUrls: ['./brand-lists.component.scss'],
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
export class BrandListsComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  isLoading = true;
  page: number = 1;
  pageSize: number = 10;
  totalBrands: number = 0;
  gridFrom: any = {
    code: 'brand-lists',
    title: 'Brand Lists Grid Settings',
  };
  modalGridSettingsRef!: NgbModalRef;
  modalCreateBrandsRef!: NgbModalRef;

  gridData = {
    id: 1,
    name: 'Grid View 1',
    employee_id: 1,
    employee_name: 'Mr.John Doe',
    grid_header: [
      {
        id: 1,
        name: 'Brand Name',
        column: 'brand_name',
        class_list: 'text-start',
      },
      {
        id: 2,
        name: 'Description',
        column: 'description',
        class_list: 'text-start',
      },
      {
        id: 3,
        name: 'Status',
        column: 'is_active',
        class_list: 'text-center',
      }
    ],
    grid_data: [
      [
        {
          column: 'brand_name',
          column_type: 'text',
          color_code: '',
          class_list: 'fw-bold',
          is_link: true,
          ref: null,
          value: 'Nike',
        },
        {
          column: 'description',
          column_type: 'text',
          color_code: '',
          class_list: '',
          is_link: false,
          ref: null,
          value: 'Sportswear and equipment',
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
      ],
      [
        {
          column: 'brand_name',
          column_type: 'text',
          color_code: '',
          class_list: 'fw-bold',
          is_link: true,
          ref: null,
          value: 'Adidas',
        },
        {
          column: 'description',
          column_type: 'text',
          color_code: '',
          class_list: '',
          is_link: false,
          ref: null,
          value: 'Sportswear manufacturer',
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
      { label: 'Products' },
      { label: 'Brand Lists', active: true }
    ];
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  onPageChange(pageNumber: number) {
    this.page = pageNumber;
  }

  openGridSettingsModal(modal: TemplateRef<any>) {
    this.modalGridSettingsRef = this.modalService.open(modal, { size: 'md', keyboard: false, backdrop: 'static' });
  }

  closeGridSettingsModal() {
    this.modalGridSettingsRef.close();
  }

  openCreateBrandsModal(modal: TemplateRef<any>) {
    this.modalCreateBrandsRef = this.modalService.open(modal, {
      size: 'lg',
      keyboard: false,
      backdrop: 'static',
      centered: true
    });

    // Handle modal result when closed
    this.modalCreateBrandsRef.result.then(
      (result: any) => {
        if (result) {
          console.log('Brand created:', result);
          // Here you would typically refresh the brand list or add the new brand to the list
        }
      },
      (reason: any) => {
        console.log('Modal dismissed:', reason);
      }
    );
  }

  closeCreateBrandsModal() {
    this.modalCreateBrandsRef.close();
  }
}
